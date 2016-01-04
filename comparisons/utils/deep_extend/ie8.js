var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (obj == null)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] == null)
          out[key] = null;
        else if (typeof obj[key] === 'object')
          out[key] = deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);
