function prev(el, selector) {
  if (selector) {
    let previous = el.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return previous;
      }
      previous = previous.previousElementSibling;
    }
    return undefined;
  } else {
    return el.previousElementSibling;
  }
}

prev(el);
// Or, with an optional selector
prev(el, '.my-selector');
