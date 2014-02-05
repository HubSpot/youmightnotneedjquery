var siblings = Array.prototype.slice.call(el.parentNode.children);

for (var i = siblings.length; i--;) {
  if (siblings[i] === el) {
    siblings.splice(i, 1);
    break;
  }
}
