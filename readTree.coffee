fs = require('fs')

readFileTree = require('readfiletree')

re = /\.[a-z]+$/
stripExtensionsInKeys = (obj) ->
  for own k, v of obj
    if re.test k
      obj[k.replace(re, '')] = v
      delete obj[k]
    
    if typeof v is 'object'
      stripExtensionsInKeys v

get = (cb) ->
  readFileTree 'comparisons/', (err, tree) ->
    if err
      cb(err)
      return

    stripExtensionsInKeys tree

    cb null, tree

module.exports = get
