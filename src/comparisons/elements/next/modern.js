function next(el, selector) {
  const nextEl = el.nextElementSibling;
  if (!selector || (nextEl && nextEl.matches(selector))) {
    return nextEl;
  }
  return null;
}

next(el);
// Or, with an optional selector
next(el, '.my-selector');
