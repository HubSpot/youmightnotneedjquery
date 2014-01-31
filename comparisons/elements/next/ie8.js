// nextSibling can include text nodes
function nextElementSibling(el) {
  do { el = el.nextSibling; } while ( el && el.nodeType !== 1 );
  return el;
}

el.nextElementSibling || nextElementSibling(el);
