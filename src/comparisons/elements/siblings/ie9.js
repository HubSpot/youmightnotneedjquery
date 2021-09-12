var siblings = function (el) {
  if (el.parentNode === null) return [];

  return Array.prototype.filter.call(el.parentNode.children, function (child) {
    return child !== el;
  });
};

siblings(el);
