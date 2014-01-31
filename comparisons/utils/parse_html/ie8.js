// This version is save, but uses ActiveX
var parseHTML = function(str) {
  var tmp = new ActiveXObject('htmlfile');
  tmp.open();
  tmp.write(str);
  tmp.close();
  return tmp.body.children;
};

// This version is prone to DOM XSS, only use with caution!
var parseHTML = function(str) {
  var el = document.createElement('div');
  el.innerHTML = str;
  return el.children;
}

parseHTML(htmlString);
