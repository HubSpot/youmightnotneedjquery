function scrollTop(el, value) {
  if (value === undefined) {
    return el.pageYOffset;
  } else {
    if (el === window || el.nodeType === 9) {
      el.scrollTo(el.pageXOffset, value);
    } else {
      el.pageYOffset = value;
    }
  }
}
