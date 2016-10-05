function index(el) {
  if (!el) return -1;
  var i = 0;
  do {
    if (el.nodeType === 1) i++;
    el = el.previousSibling;
  } while (el);
  return i;
}
