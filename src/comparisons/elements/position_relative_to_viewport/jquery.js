var offset = $(el).offset();

var result = {
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft,
};
