function addEventListener(el, eventName, eventHandler, selector) {
  if (selector) {
    el.addEventListener(eventName, function (e) {
      if (e.target && e.target.matches(selector)) {
        eventHandler(e);
      }
    });
  } else {
    el.addEventListener(eventName, eventHandler);
  }
}

addEventListener(el, eventName, eventHandler);
// Or when you want to delegate event handling
addEventListener(el, eventName, eventHandler, selector);
