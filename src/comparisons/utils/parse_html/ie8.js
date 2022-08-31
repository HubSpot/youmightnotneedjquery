var parseHTML = function (str) {
  var el = document.createElement('div');
  el.innerHTML = str;
  return el.childNodes;
};

parseHTML(htmlString);
