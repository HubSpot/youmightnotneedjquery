function closest(el, sel) {
  Element.prototype.matches ||
    (Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector);
  Element.prototype.closest ||
    (Element.prototype.closest = function (c) {
      var a = this;
      do {
        if (a.matches(c)) return a;
        a = a.parentElement || a.parentNode;
      } while (null !== a && 1 === a.nodeType);
      return null;
    });
  return el.closest(sel);
}

closest(el, sel);
