if (el.classList)
  el.classList.add(className);
else
  el.className += (' ' + el.className + ' ').indexOf(' ' + className + ' ') === -1
    ? ' ' + className
    : '';
