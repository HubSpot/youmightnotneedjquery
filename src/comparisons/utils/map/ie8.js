function map(array, callback) {
  var results = [];
  for (var i = 0, length = array.length; i < length; i++) {
    var value = callback(array[i], i);
    if (value != null) results.push(value);
  }
  return [].concat.apply([], results);
}

map(array, function (value, index) {});
