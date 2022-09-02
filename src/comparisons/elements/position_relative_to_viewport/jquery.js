function offset(el) {
  var offset = $(el).offset();
  return {
    top: offset.top - document.body.scrollTop,
    left: offset.left - document.body.scrollLeft,
  };
}
