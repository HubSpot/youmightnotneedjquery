var parseHTML = function (str) {
  var tmp = document.implementation.createHTMLDocument('');
  tmp.body.innerHTML = str;
  return Array.prototype.slice.call(tmp.body.childNodes);
};

parseHTML(htmlString);
