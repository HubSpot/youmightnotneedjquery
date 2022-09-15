el.remove();

// multiple elements
for (const el of [...document.querySelectorAll(selector)]) {
  el.remove();
}
