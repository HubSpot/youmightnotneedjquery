function parseHTML(str) {
  const tmp = document.implementation.createHTMLDocument('');
  tmp.body.innerHTML = str;
  return [...tmp.body.childNodes];
};

parseHTML(htmlString);
