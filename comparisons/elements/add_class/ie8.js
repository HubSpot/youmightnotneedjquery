if (el.classList) {
  el.classList.add(className);
} else {
  var current = el.className;
  if (current.indexOf(className) < 0) {
    if (current == '') el.className = className;
    else el.className += ' ' + className;
  }
}