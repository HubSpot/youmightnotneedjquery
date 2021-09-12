function map(arr, fn) {
  var results = [];
  for (var i = 0; i < arr.length; i++)
    results.push(fn(arr[i], i));
  return results;
}

map(array, function(value, index){

});
