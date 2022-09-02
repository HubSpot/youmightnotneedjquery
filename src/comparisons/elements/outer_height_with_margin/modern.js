function outerHeight(el) {
  const style = getComputedStyle(el);

  return (
    el.getBoundingClientRect().height +
    Number.parseFloat(style.getPropertyValue('marginTop')) +
    Number.parseFloat(style.getPropertyValue('marginBottom'))
  );
}

outerHeight(el);
