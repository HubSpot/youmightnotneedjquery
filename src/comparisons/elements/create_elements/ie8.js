function generateElements(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  if (div.children.length === 0) {
    return null;
  }
  if (div.children.length === 1) {
    return div.firstChild;
  } else {
    return div.children;
  }
}

generateElements('<div>Hello World!</div>');
