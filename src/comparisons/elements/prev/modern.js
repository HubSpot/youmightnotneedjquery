function prev(el, selector) {
  if (selector) {
    let previous = el.previousElementSibling;
    while (previous && !previous.matches(selector)) {
      previous = previous.previousElementSibling;
    }
    return previous;
  } else {
    return el.previousElementSibling;
  }
}

prev(el);
// Or, with an optional selector
prev(el, '.my-selector');
