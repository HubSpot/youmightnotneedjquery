el.remove();

// one element:
document.querySelector('el').remove();

// multiple elements:
for (const el
     of [...document.querySelectorAll('el')]) {
  el.remove();
}
