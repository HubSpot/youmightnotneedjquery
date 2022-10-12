document.addEventListener(eventName, (event) => {
  if (event.target.closest(elementSelector)) {
    handler.call(event.target, event);
  }
});
