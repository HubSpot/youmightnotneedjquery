function parents(el, selector) {
  var parents = [];
  while ((el = el.parentNode) && el !== document) {
    // See "Matches Selector" above
    if (!selector || matches(el, selector)) parents.push(el);
  }
  return parents;
}
