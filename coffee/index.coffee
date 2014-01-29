showFirst = (els...) ->
  found = false

  for el in els
    if el and not found
      found = true
      el.style.display = 'block'
    else if el
      el.style.display = 'none'

hide = (els...) ->
  for el in els when el
    el.style.display = 'none'

setMinVersion = (version=10) ->
  version = parseInt version

  for section in document.querySelectorAll('.comparison')
    blocks = section.querySelectorAll('.browser')

    versions = {}
    for block in blocks
      versions[block.getAttribute('data-browser')] = block

    switch version
      when 8
        showFirst versions['ie8']
        hide versions['ie9'], versions['ie10']
      when 9
        showFirst versions['ie9'], versions['ie8']
        hide versions['ie10']
      when 10
        showFirst versions['ie10'], versions['ie9'], versions['ie8']

document.addEventListener 'DOMContentLoaded', ->
  slider = document.querySelector('.version-slider')

  do handleChange = ->
    setMinVersion slider.value

  slider.addEventListener 'change', handleChange
