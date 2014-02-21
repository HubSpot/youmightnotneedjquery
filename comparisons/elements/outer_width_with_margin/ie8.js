function outerWidth(el){
  var height = el.offsetWidth;
  var style = el.currentStyle || getComputedStyle(el);

  height += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return height;
}

outerWidth(el);
