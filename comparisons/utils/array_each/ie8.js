function forEach(array, fn) {
  for (i = 0; i < array.length; i++)
    fn(array[i], i);
}

forEach(array, function(item, i){

});
