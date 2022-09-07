function outerWidth(el) {
  const style = getComputedStyle(el);

  return (
    el.getBoundingClientRect().width +
    parseFloat(style.getPropertyValue('marginLeft')) +
    parseFloat(style.getPropertyValue('marginRight'))
  );
}

outerWidth(el);
