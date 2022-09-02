// For a full list of event types: https://developer.mozilla.org/en-US/docs/Web/API/Event
const event = new Event('change', {bubbles: true});
el.dispatchEvent(event);
