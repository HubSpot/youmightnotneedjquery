function toArray(selector) {
  var array = [];
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) array.push(elements[i]);
  return array;
}
