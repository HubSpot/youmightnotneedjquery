if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(new RegExp('(^|\\b)' + el.className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
