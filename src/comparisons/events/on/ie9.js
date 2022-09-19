function addEventListener(el, eventName, eventHandler, selector) {
  if (selector) {
    var wrappedHandler = function (e) {
      if (e.target && e.target.matches(selector)) {
        eventHandler(e);
      }
    };
    el.addEventListener(eventName, wrappedHandler);
    return wrappedHandler;
  } else {
    el.addEventListener(eventName, eventHandler);
    return eventHandler;
  }
}

// Use the return value to remove that event listener, see #off
addEventListener(el, eventName, eventHandler);
// Or when you want to delegate event handling
addEventListener(el, eventName, eventHandler, selector);
