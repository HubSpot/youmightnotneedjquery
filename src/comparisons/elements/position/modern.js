function position(el) {
  const {top, left} = el.getBoundingClientRect();
  const {marginTop, marginLeft} = window.getComputedStyle(el);
  return {
    top: top - parseInt(marginTop, 10),
    left: left - parseInt(marginLeft, 10)
  };
}
