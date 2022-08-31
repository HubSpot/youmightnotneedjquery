function index(el) {
  if (!el) return -1;
  var i = 0;
  while (el) {
    el = el.previousSibling;
    if (el && el.nodeType === 1) i++;
  }
  return i;
}
