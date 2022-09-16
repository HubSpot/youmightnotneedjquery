function deepExtend(out, ...arguments_) {
  if (!out) {
    return {};
  }

  for (const obj of arguments_) {
    if (!obj) {
      continue;
    }

    for (const [key, value] of Object.entries(obj)) {
      switch (Object.prototype.toString.call(value)) {
        case '[object Object]':
          out[key] = deepExtend(out[key], value);
          break;
        case '[object Array]':
          out[key] = deepExtend(new Array(value.length), value);
          break;
        default:
          out[key] = value;
      }
    }
  }

  return out;
}

deepExtend({}, objA, objB);
