// Run with: node tests/map.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

let passed = 0;
let failed = 0;

for (const variant of ['modern', 'ie9', 'ie8']) {
  const filename = path.join(
    __dirname,
    '..',
    'src/comparisons/utils/map',
    `${variant}.js`
  );
  const source = fs.readFileSync(filename, 'utf8');
  // Supply a callback to the displayed usage example, leaving its logic intact.
  const placeholder =
    /function \(value, index\) \{\}|\(value, index\) => \{\}/g;
  assert.equal(source.match(placeholder)?.length, 1);
  const script = new vm.Script(source.replace(placeholder, 'callback'), {
    filename
  });

  function map(array, callback) {
    const context = vm.createContext({array, callback});
    if (variant !== 'modern') {
      vm.runInContext(
        `Array.prototype.map = Array.prototype.filter =
         Array.prototype.forEach = Array.prototype.reduce =
         Array.prototype.flat = Array.prototype.flatMap = undefined;
         Array.from = Array.isArray = undefined;`,
        context
      );
    }
    return script.runInContext(context);
  }

  function test(name, callback) {
    try {
      callback();
      passed++;
    } catch (error) {
      failed++;
      console.error(`${variant}: ${name}\n${error.stack}`);
    }
  }

  // Compare values without requiring the VM's Array prototype to be ours.
  function equal(actual, expected) {
    assert.ok(Array.isArray(actual));
    assert.deepEqual(Array.from(actual), expected);
  }

  test('issue #355: flatten matching items and omit empty arrays', () => {
    const input = [{str: 'something'}, {str: 'else'}];
    const result = map(input, (value) =>
      value.str === 'something' ? [value] : []
    );
    equal(result, [input[0]]);
    assert.equal(result[0], input[0]);
  });

  test('map scalar values with ordered value/index arguments', () => {
    const calls = [];
    const result = map([4, 5, 6], (value, index) => {
      calls.push([value, index]);
      return value + index;
    });
    equal(result, [4, 6, 8]);
    assert.deepEqual(calls, [
      [4, 0],
      [5, 1],
      [6, 2]
    ]);
  });

  test('omit only direct null and undefined results', () => {
    equal(
      map([null, undefined, 0, false, '', NaN], (value) => value),
      [0, false, '', NaN]
    );
    equal(
      map([1, 2], () => null),
      []
    );
    equal(
      map([1, 2], () => undefined),
      []
    );
  });

  test('preserve null and undefined inside returned arrays', () => {
    equal(
      map([1], () => [null, undefined, 0, false, '']),
      [null, undefined, 0, false, '']
    );
  });

  test('flatten exactly one level and preserve object identity', () => {
    const object = {value: 1};
    const nested = [object];
    const result = map([1, 2], (value) => (value === 1 ? [nested] : object));
    equal(result, [nested, object]);
    assert.equal(result[0], nested);
    assert.equal(result[1], object);
  });

  test('return a fresh empty array without invoking the callback', () => {
    const input = [];
    const result = map(input, () => assert.fail('unexpected callback'));
    equal(result, []);
    assert.notEqual(result, input);
    assert.notEqual(
      result,
      map(input, () => {})
    );
  });

  test('visit holes in sparse input arrays', () => {
    const input = new Array(3);
    input[2] = 'last';
    const calls = [];
    equal(
      map(input, (value, index) => {
        calls.push([value, index]);
        return index;
      }),
      [0, 1, 2]
    );
    assert.deepEqual(calls, [
      [undefined, 0],
      [undefined, 1],
      ['last', 2]
    ]);
  });

  test('accept array-like inputs and ignore non-index properties', () => {
    const input = {0: 'first', 2: 'last', length: 3, other: 'ignored'};
    const calls = [];
    equal(
      map(input, (value, index) => {
        calls.push([value, index]);
        return value;
      }),
      ['first', 'last']
    );
    assert.deepEqual(calls, [
      ['first', 0],
      [undefined, 1],
      ['last', 2]
    ]);
    equal(
      map({length: 0}, () => assert.fail('unexpected callback')),
      []
    );
  });

  test('leave input data unchanged', () => {
    const object = Object.freeze({value: 1});
    const input = Object.freeze([object, 2]);
    const result = map(input, (value) => [value]);
    equal(result, [object, 2]);
    assert.equal(result[0], object);
    assert.notEqual(result, input);
    assert.deepEqual(input, [object, 2]);
  });

  test('do not visit elements appended by a callback', () => {
    const input = [1, 2];
    equal(
      map(input, (value, index) => {
        if (index === 0) input.push(3);
        return value;
      }),
      [1, 2]
    );
  });

  test('visit every original index after the input is truncated', () => {
    const input = [1, 2, 3];
    const calls = [];
    equal(
      map(input, (value, index) => {
        calls.push([value, index]);
        if (index === 0) input.length = 1;
        return index;
      }),
      [0, 1, 2]
    );
    assert.deepEqual(calls, [
      [1, 0],
      [undefined, 1],
      [undefined, 2]
    ]);
  });

  test('read updated and deleted elements when their index is visited', () => {
    const input = [1, 2, 3];
    const calls = [];
    equal(
      map(input, (value, index) => {
        calls.push([value, index]);
        if (index === 0) {
          input[1] = 20;
          delete input[2];
        }
        return value;
      }),
      [1, 20]
    );
    assert.deepEqual(calls, [
      [1, 0],
      [20, 1],
      [undefined, 2]
    ]);
  });

  test('flatten after later callbacks mutate previously returned arrays', () => {
    const returned = ['before'];
    equal(
      map([1, 2], (value) => {
        if (value === 1) return returned;
        returned[0] = 'after';
        returned.push('added');
        return [];
      }),
      ['after', 'added']
    );
  });

  test('handle holes in returned arrays like the browser flattening method', () => {
    const returned = new Array(2);
    returned[1] = 'last';
    const result = map([1], () => returned);
    if (variant === 'modern') {
      equal(result, ['last']);
    } else {
      assert.equal(result.length, 2);
      assert.equal(0 in result, false);
      assert.equal(result[1], 'last');
    }
  });

  test('propagate callback errors and stop iteration', () => {
    const error = new Error('callback failed');
    const calls = [];
    assert.throws(
      () =>
        map([1, 2, 3], (value, index) => {
          calls.push(index);
          if (index === 1) throw error;
          return value;
        }),
      (actual) => actual === error
    );
    assert.deepEqual(calls, [0, 1]);
  });

  if (variant !== 'modern') {
    test('work without native map on the input array', () => {
      const input = [1, 2];
      input.map = undefined;
      equal(
        map(input, (value) => [value, value + 1]),
        [1, 2, 2, 3]
      );
    });
  }
}

console.log(`${passed} passed, ${failed} failed`);
if (failed) process.exitCode = 1;
