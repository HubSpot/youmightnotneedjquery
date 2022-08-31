var onClick = function (element, handler) {
  if (element.addEventListener) {
    element.addEventListener('click', handler, false);
  } else {
    element.attachEvent('onclick', handler);
  }
};

onClick(el, function () {});
