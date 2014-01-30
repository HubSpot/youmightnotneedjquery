request = new XMLHttpRequest
request.open('GET', '/my/url', true)
request.send()

request.onload = function() {
  resp = this.response
}

request.onerror = function() {

}
