if (!e) var e = window.event;
e.cancelBubble = true; // IE
if (e.stopPropagation) e.stopPropagation();
