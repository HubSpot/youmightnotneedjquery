if (el.addEventListener) {
  el.addEventListener('click', function() {}, false);
}
else {
  el.attachEvent('onclick', function() {});
}