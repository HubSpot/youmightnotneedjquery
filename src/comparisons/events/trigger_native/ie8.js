if (document.createEvent) {
  var event = document.createEvent('HTMLEvents');
  event.initEvent('change', true, false);
  el.dispatchEvent(event);
} else {
  el.fireEvent('onchange');
}
