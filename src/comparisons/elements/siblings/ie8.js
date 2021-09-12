var siblings = function (el) {
  if (el.parentNode === null) return [];

  var siblingElements = Array.prototype.slice.call(el.parentNode.children);

  for (var i = siblingElements.length; i--; ) {
    if (siblingElements[i] === el) {
      return siblingElements.splice(i, 1);
    }
  }

  return siblingElements;
};

siblings(el);
