if (el.classList)
  el.classList.remove(className)
else
  el.className = el.className.replace(new RegExp('(^| )' + className.split(' ').join('|') + '( |$)', 'gi'), ' ')
