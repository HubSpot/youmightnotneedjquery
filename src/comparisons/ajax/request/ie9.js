function request(success, error) {
  var request = new XMLHttpRequest();
  request.open('GET', '/my/url', true);

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success! If you expect this to be JSON, use JSON.parse!
      success(this.responseText, this.status);
    } else {
      // We reached our target server, but it returned an error
      error();
    }
  };

  request.onerror = function () {
    error();
  };

  request.send();
}
