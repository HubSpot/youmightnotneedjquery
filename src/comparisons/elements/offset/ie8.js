var rect = el.getBoundingClientRect();

var result = {
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft,
};
