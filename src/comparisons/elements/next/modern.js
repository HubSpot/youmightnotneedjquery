function next(el, selector) {
  if (selector) {
    let next = el.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return next;
      }
      next = next.nextElementSibling;
    }
    return undefined;
  } else {
    return el.nextElementSibling;
  }
}

next(el);
// Or, with an optional selector
next(el, '.my-selector');
