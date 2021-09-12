function filter(selector, filterFn) {
  var elements = document.querySelectorAll(selector);
  var out = [];
  for (var i = elements.length; i--;) {
    if (filterFn(elements[i]))
      out.unshift(elements[i]);
  }
  return out;
}

filter(selector, filterFn);
