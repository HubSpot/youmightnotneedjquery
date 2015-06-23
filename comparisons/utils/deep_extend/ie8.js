var deepExtend = function(out) {
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];
    if(Object.prototype.toString.call(obj) === '[object Array]'){
      out = out || [];
    }else{
      out = out || {};
    }

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
           out[key] = _deepExtend(out[key], obj[key]);
        else
          if(Object.prototype.toString.call(out) === '[object Array]'){
            out.push(obj[key]);
          }else{
            out[key] = obj[key];
          }
      }
    }
  }
  return out;
};

deepExtend({}, objA, objB);
