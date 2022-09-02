const event = new CustomEvent('my-event', {detail: {some: 'data'}});
el.dispatchEvent(event);
