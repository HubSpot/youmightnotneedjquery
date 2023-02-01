function next(el, selector) {
  if (selector) {
    const next = el.nextElementSibling;
    if (next && next.matches(selector)) {
      return next;
    }
    return undefined;
  } else {
    return el.nextElementSibling;
  }
}

next(el);
// Or, with an optional selector
next(el, '.my-selector');
