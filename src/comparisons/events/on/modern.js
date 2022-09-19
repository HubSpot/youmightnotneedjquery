function addEventListener(el, eventName, eventHandler, selector) {
  if (selector) {
    const wrappedHandler = (e) => {
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

addEventListener(el, eventName, eventHandler);
// Or when you want to delegate event handling
addEventListener(el, eventName, eventHandler, selector);
