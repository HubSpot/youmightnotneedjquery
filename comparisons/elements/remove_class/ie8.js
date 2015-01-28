if (el.classList) {
  el.classList.remove(className);
} else {
  var cur = (' ' + el.className + ' ')
    , name = ' ' + className + ' ';

  while (cur.indexOf(name) > -1) {
    cur = cur.replace(name, ' ');
  }

  // Trim white spaces
  var finalValue = cur.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  if (el.className !== finalValue) {
    el.className = finalValue;
  }
}
