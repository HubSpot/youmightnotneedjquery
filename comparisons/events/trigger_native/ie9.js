event = document.createEvent('HTMLEvents')
event.initEvent('change', true, false)
el.dispatchEvent(event)
