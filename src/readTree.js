const fs = require('fs');

const readFileTree = require('readfiletree');

function get(cb) {
  return readFileTree('src/comparisons/', (err, tree) => {
    if (err) {
      cb(err);
      return;
    }

    const out = {};

    for (const [title, comps] of Object.entries(tree)) {
      out[title] = {};

      for (let [name, comp] of Object.entries(comps)) {
        if (name === 'alternatives.txt') name = '_alternatives';

        out[title][name] = {};

        if (typeof comp !== 'string') {
          for (const [filename, code] of Object.entries(comp)) {
            const [version, ext] = filename.split('.');

            out[title][name][version] ||= {};
            out[title][name][version][ext] = code;
          }
        } else {
          out[title][name] = comp;
        }
      }
    }

    cb(null, out);
  });
}

module.exports = get;
