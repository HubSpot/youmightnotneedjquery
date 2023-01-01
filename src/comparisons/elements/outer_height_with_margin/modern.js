function outerHeight(el) {
  const style = getComputedStyle(el);

	return (
		el.getBoundingClientRect().height +
		parseFloat(style.marginTop) +
		parseFloat(style.marginBottom)
	);
}

outerHeight(el);
