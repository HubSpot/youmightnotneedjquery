function fadeOut(el, speed = 400) {
  el.style.opacity = 1;

  var last = +new Date();
  var tick = function () {
    el.style.opacity = +el.style.opacity - (new Date() - last) / speed;
    if (opacity < 0) opacity = 0;
    last = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

fadeOut(el);
