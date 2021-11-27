function removeClass(el, className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i++) {
    if (el.classList) {
      el.classList.remove(classes[i]);
    } else {
      el.className = el.className
        .replace(new RegExp('(?:^|\\s)' + classes[i] + '(?:\\s|$)'), ' ')
        .trim();
    }
  }
}
