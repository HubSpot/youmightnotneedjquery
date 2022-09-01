const offset = $(el).offset();

const result = {
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft,
};
