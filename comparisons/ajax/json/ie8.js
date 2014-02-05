request = new XMLHttpRequest
request.open('GET', '/my/url', true)

request.onreadystatechange = function() {
  if (request.readyState === 4){
    if (request.status >= 200 && request.status < 400){
      // Success!
      data = JSON.parse(request.responseText)
    } else {
      // Error :(
    }
  }
}

request.send()
