function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  return height;
}

outerHeight(el);
