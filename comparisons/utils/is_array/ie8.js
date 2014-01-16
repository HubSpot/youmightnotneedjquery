isArray = Array.isArray || function(arr){
  return arr.toString() == '[object Array]';
}

isArray(arr);
