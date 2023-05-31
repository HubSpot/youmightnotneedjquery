function prev(el, selector) {
  const prevEl = el.previousElementSibling;
  if (!selector || (prevEl && prevEl.matches(selector))) {
    return prevEl;
  }
  return null;
}

prev(el);
// Or, with an optional selector
prev(el, '.my-selector');
