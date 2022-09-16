function position(el) {
  var box = el.getBoundingClientRect();
  var docElem = document.documentElement;
  var marginLeft = 0;
  var marginTop = 0;
  if (typeof getComputedStyle === 'function') {
    var style = window.getComputedStyle(el);
    marginLeft = parseInt(style.marginLeft, 10);
    marginTop = parseInt(style.marginTop, 10);
  } else if (el.currentStyle) {
    marginLeft = el.currentStyle['marginLeft']
      ? parseInt(el.currentStyle['marginLeft'], 10)
      : 0;
    marginTop = el.currentStyle['marginTop']
      ? parseInt(el.currentStyle['marginTop'], 10)
      : 0;
  }
  return {
    top: box.top + (window.pageYOffset || docElem.scrollTop) - marginTop,
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - marginLeft
  };
}
