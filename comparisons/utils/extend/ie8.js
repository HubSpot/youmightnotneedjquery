extend = function(out) {
  if (!out)
    out = {}

  var objs = Array.prototype.slice.call(arguments, 1)

  for (var i = 0; i < objs.length; i++) {
    var obj = objs[i]

    if (obj) {
      for (key in obj) {
        if (obj.hasOwnProperty(key))
          out[key] = obj[key]
      }
    }
  }

  return out
}

extend({}, objA, objB)
