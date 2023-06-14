function scrollLeft(el, value) {
  var win;
  if (el.window === el) {
    win = el;
  } else if (el.nodeType === 9) {
    win = el.defaultView;
  }

  if (value === undefined) {
    return win ? win.pageXOffset : el.scrollLeft;
  }

  if (win) {
    win.scrollTo(value, win.pageYOffset);
  } else {
    el.scrollLeft = value;
  }
}
