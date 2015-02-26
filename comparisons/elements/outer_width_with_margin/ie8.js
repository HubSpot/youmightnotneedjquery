function outerWidth(el) {
  var width = el.offsetWidth;
  var style = el.currentStyle || getComputedStyle(el);

  width += (parseInt(style.marginLeft) || 0) + (parseInt(style.marginRight) || 0);
  return width;
}

outerWidth(el);
