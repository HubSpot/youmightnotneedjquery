function trigger(el, eventType) {
  if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
    el[eventType]();
  } else if (eventType === 'string') {
    if (document.createEvent) {
      var event = document.createEvent('HTMLEvents');
      event.initEvent(eventType, true, false);
      el.dispatchEvent(event);
    } else {
      el.fireEvent('on' + eventType);
    }
  } else {
    el.dispatchEvent(eventType);
  }
}

// For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
trigger(el, 'focus');
