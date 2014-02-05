if (el.classList)
  el.classList.contains(className);
else
  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
