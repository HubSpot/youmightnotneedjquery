function prev(el, selector) {
  if (selector) {
    const prev = el.previousElementSibling;
    if (prev && prev.matches(selector)) {
      return prev;
    }
    return undefined;
  } else {
    return el.previousElementSibling;
  }
}

prev(el);
// Or, with an optional selector
prev(el, '.my-selector');
