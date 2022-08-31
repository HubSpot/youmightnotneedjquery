function siblings(el) {
  if (el.parentNode === null) {
    return [];
  }

  return Array.prototype.filter.call(el.parentNode.children, child => child !== el);
}

siblings(el);
