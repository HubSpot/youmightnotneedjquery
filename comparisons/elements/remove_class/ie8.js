if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(new RegExp('(^|\\b)(\\s+)' + className.split(' ').join('(\\s+)|(\\s+)') + '(\\s+)(\\b|$)', 'g'), ' ');
