function wrap(el) {
  const wrappingElement = document.createElement('div');
  el.replaceWith(wrappingElement);
  wrappingElement.appendChild(el);
}
