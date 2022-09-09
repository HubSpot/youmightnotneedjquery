function outerHeight(el) {
  const style = getComputedStyle(el);

  return (
    el.getBoundingClientRect().height +
    parseFloat(style.getPropertyValue('marginTop')) +
    parseFloat(style.getPropertyValue('marginBottom'))
  );
}

outerHeight(el);
