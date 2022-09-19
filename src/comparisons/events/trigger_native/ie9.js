function trigger(el, eventType) {
  if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
    el[eventType]();
  } else {
    var event;
    if (eventType === 'string') {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventType, true, false);
    } else {
      event = eventType;
    }
    el.dispatchEvent(event);
  }
}

// For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
trigger(el, 'focus');
