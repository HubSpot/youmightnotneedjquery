function offset(el) {
  const boundingBox = el.getBoundingClientRect();
  const documentElement = document.documentElement;

  return {
    top: boundingBox.top + window.pageYOffset - documentElement.clientTop,
    left: boundingBox.left + window.pageXOffset - documentElement.clientLeft,
  };
}
