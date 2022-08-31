function setHeight(el, val) {
  if (typeof val === 'function') {
    val = val();
  }

  if (typeof val === 'number'){
    val = `${val}px`;
  }

  el.style.height = val;
}

setHeight(el, val);
