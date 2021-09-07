numberWithCommas = (num) ->
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

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

filter = (term) ->
  visibleIndex = 0

  allEmpty = true

  for section in document.querySelectorAll('section')
    empty = true

    for comp in section.querySelectorAll('.comparison')
      if not term or comp.textContent.toLowerCase().indexOf(term.toLowerCase()) isnt -1
        empty = false
        comp.classList.remove 'hidden'
      else
        comp.classList.add 'hidden'

    if empty
      section.classList.add 'hidden'
    else
      allEmpty = false

      section.classList.remove 'hidden'

      if ++visibleIndex % 2
        section.classList.add 'odd'
      else
        section.classList.remove 'odd'

  comparisons = document.querySelector('.comparisons')
  if allEmpty
    comparisons.classList.add 'empty'
  else
    comparisons.classList.remove 'empty'

document.addEventListener 'DOMContentLoaded', ->
  slider = document.querySelector('.version-slider')

  stars = document.querySelector('.github-stars')
  fetch('https://api.github.com/repos/hubspot/youmightnotneedjquery')
    .then((r) => r.json())
    .then((data) => stars.textContent = numberWithCommas data.watchers_count)
    .catch(() => stars.textContent = '10k+')

  do handleChange = ->
    setMinVersion slider.value

  slider.addEventListener 'change', handleChange

  search = document.querySelector('input[type="search"]')

  search.addEventListener 'input', ->
    filter search.value
