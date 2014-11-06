var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument('title');
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);
