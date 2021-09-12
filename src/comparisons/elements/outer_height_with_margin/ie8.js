function outerHeight(el) {
  var height = el.offsetHeight;
  var style = el.currentStyle || getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

outerHeight(el);
