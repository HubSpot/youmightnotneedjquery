function outerWidth(el) {
  var width = el.offsetWidth;
  var style = el.currentStyle || getComputedStyle(el);

  width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  return width;
}

outerWidth(el);
