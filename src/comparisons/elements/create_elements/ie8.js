function generateElements(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children;
}

generateElements('<div>Hello World!</div>');
