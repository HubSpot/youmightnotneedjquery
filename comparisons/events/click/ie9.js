var event = document.createEvent('HTMLEvents');
event.initEvent('click', true, false);
el.dispatchEvent(event);
