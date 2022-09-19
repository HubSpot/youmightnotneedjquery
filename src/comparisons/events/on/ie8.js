function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
    return handler;
  } else {
    var wrappedHandler = function (event) {
      handler.call(el, event);
    };
    el.attachEvent('on' + eventName, wrappedHandler);
    return wrappedHandler;
  }
}

// Use the return value to remove that event listener, see #off
var handlerToRemove = addEventListener(el, eventName, handler);
