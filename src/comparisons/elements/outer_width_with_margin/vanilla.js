function outerWidth(el) {
  const style = getComputedStyle(el);

  return el.getBoundingClientRect().width
    + Number.parseFloat(style.getPropertyValue('marginLeft'))
    + Number.parseFloat(style.getPropertyValue('marginRight'));
}

outerWidth(el);
