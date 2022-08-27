function request(success, error) {
  var request = new XMLHttpRequest();
  request.open('GET', '/my/url', true);

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 400) {
        // Success! If you expect this to be JSON, use JSON.parse!
        success(this.responseText, this.status);
      } else {
        error();
      }
    }
  };

  request.send();
}
