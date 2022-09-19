function offset(el) {
  var docElem = document.documentElement;
  var rect = el.getBoundingClientRect();
  return {
    top:
      rect.top +
      (window.pageYOffset || docElem.scrollTop) -
      (docElem.clientTop || 0),
    left:
      rect.left +
      (window.pageXOffset || docElem.scrollLeft) -
      (docElem.clientLeft || 0)
  };
}
