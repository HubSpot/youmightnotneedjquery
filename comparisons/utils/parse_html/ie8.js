var parseHTML = function(str) {
  var tmp = new ActiveXObject('htmlfile');
  tmp.open();
  tmp.write(str);
  tmp.close();
  return tmp.body.children;
};

parseHTML(htmlString);
