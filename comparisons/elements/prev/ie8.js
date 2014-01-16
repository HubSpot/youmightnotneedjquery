// prevSibling can include text nodes
function prevElementSibling(el) {
  do { el = el.prevSibling } while ( el && el.nodeType !== 1 );
  return el;
}

el.prevElementSibling || prevElementSibling(el)
