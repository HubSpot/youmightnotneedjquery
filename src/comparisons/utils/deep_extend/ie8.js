function deepExtend(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var rawType = Object.prototype.toString.call(obj[key]);
        if (rawType === '[object Object]') {
          out[key] = deepExtend(out[key], obj[key]);
        } else if (rawType === '[object Array]') {
          out[key] = deepExtend(new Array(obj[key].length), obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
}

deepExtend({}, objA, objB);
