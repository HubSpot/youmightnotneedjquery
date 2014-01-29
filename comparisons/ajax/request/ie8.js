request = new XMLHttpRequest
request.open('GET', '/my/url', true)
request.send()

request.onload = function() {
  resp = request.responseText

}

request.onerror = function() {

}
