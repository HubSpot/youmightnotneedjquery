parseHTML = function(str){
  el = document.createElement('div');
  el.innerHTML = str;
  return el.children;
}

parseHTML(htmlString);
