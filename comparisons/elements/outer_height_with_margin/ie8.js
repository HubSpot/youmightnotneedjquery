function outerHeight(el) {
  var height = el.offsetHeight;
  var style = el.currentStyle || getComputedStyle(el);

  height += (parseInt(style.marginTop) || 0) + (parseInt(style.marginBottom) || 0);
  return height;
}

outerHeight(el);
