function index(el) {
  if (!el) return -1;
  var i = 0;
  do {
    i++;
  } while (el = el.previousElementSibling);
  return i;
}
