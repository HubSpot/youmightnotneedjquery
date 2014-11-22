function offset(el){
	var rect = el.getBoundingClientRect();
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop,
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	};
}

offset(el).top;