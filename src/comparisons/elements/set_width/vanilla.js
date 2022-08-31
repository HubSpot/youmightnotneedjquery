function setWidth(el, val) {
  if (typeof val === 'function') {
    val = val();
  }

  if (typeof val === 'number') {
    val = `${val}px`;
  }

  el.style.width = val;
}

setWidth(el, val);
