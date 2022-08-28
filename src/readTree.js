const fs = require('fs');

const readFileTree = require('readfiletree');

function get(cb) {
  return readFileTree('comparisons/', function (err, tree) {
    if (err) {
      cb(err);
      return;
    }
    const out = {};
    for (const title in tree) {
      const comps = tree[title];
      out[title] = {};
      for (let name in comps) {
        const comp = comps[name];
        if (name === 'alternatives.txt') {
          name = '_alternatives';
        }
        out[title][name] = {};
        if (typeof comp !== 'string') {
          for (const filename in comp) {
            const code = comp[filename];
            const [version, ext] = filename.split('.');
            let base;
            if ((base = out[title][name])[version] == null) {
              base[version] = {};
            }
            out[title][name][version][ext] = code;
          }
        } else {
          out[title][name] = comp;
        }
      }
    }
    return cb(null, out);
  });
}

module.exports = get;
