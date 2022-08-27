function objectEach(obj, callback) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      callback(key, obj[key]);
    }
  }
}

objectEach(obj, function (key, value) {});
