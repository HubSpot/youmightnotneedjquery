function outerHeight(el) {
  var height = el.offsetHeight;
  var style = el.currentStyle || getComputedStyle(el);

  height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  return height;
}

outerHeight(el);
