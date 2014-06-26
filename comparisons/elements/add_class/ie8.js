if (el.classList) {
  el.classList.add(className);
} else {
  var current = el.className, found = false;
  var all = current.split(' ');
  for(var i=0; i<all.length, !found; i++) found = all[i] === className;
  if(!found) {
    if(current === '') el.className = className;
    else el.className += ' ' + className;
  }
}