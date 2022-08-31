function offset(el) {
  const boundingBox = el.getBoundingClientRect();
  const documentElement = document.documentElement;

  return {
    top: boundingBox.top + (window.pageYOffset || documentElement.scrollTop),
    left: boundingBox.left + (window.pageXOffset || documentElement.scrollLeft),
  };
}
