function load(selector, path) {
  var request = new XMLHttpRequest();
  request.open('GET', path, true);
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        var elements = document.querySelector(selector);
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = this.responseText;
        }
      } else {
        // Error :(
      }
    }
  };
}

load('#some.selector', '/path/to/template.html');
