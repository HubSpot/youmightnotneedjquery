function scrollLeft(el, value) {
  if (value === undefined) {
    return el.pageXOffset;
  } else {
    if (el === window || el.nodeType === 9) {
      el.scrollTo(value, el.pageYOffset);
    } else {
      el.pageXOffset = value;
    }
  }
}
