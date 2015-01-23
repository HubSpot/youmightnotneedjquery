window.requestAnimationFrame = function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(f) {
      window.setTimeout(f,3e3/60);
    }
}();

var fps = 1,
    now,
    then = Date.now(),
    i = 1000/fps,
    delta,
    counter = 0,
    first = then;

function draw() {
  requestAnimationFrame(draw);
  now = Date.now();
  delta = now - then;

  if (delta > i) {
    then = now - (delta % i);
    var el = (then - first)/1000;

    document.getElementById('frame_count').innerHTML = ++counter + 'f / ' + parseInt(el) + 's = ' + parseInt(counter/el) + 'fps';
  }
}

draw();
