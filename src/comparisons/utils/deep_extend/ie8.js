var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object'){
          if(obj[key] instanceof Array == true)
            out[key] = obj[key].slice(0);
          else
            out[key] = deepExtend(out[key], obj[key]);
        }
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);