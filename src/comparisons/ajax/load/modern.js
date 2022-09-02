const response = await fetch('/path/to/template.html');
const body = await response.text();

document.querySelector('#some.selector').innerHTML = body;
