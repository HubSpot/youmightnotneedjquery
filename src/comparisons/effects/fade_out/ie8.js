function fadeOut(el, speed = 400) {
  var opacity = 1;

  el.style.opacity = 1;
  el.style.filter = '';

  var last = +new Date();
  var tick = function () {
    opacity -= (new Date() - last) / speed;
    if (opacity < 0) opacity = 0;
    el.style.opacity = opacity;
    el.style.filter = 'alpha(opacity=' + 100 * opacity + ')';

    last = +new Date();

    if (opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

fadeOut(el);
