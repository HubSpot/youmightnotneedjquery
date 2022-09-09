function parents(el, selector) {
  const parents = [];
  while ((el = el.parentNode) && el !== document) {
    if (!selector || el.matches(selector)) parents.unshift(el);
  }
  return parents;
}
