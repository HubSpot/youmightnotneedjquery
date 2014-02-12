// prevSibling can include text nodes
function previousElementSibling(el) {
  do { el = el.previousSibling; } while ( el && el.nodeType !== 1 );
  return el;
}

el.previousElementSibling || previousElementSibling(el);
