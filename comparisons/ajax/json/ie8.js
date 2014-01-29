request = new XMLHttpRequest
request.open('GET', '/my/url', true)
request.send()

request.onload = function() {
  data = JSON.parse(request.responseText)
}
