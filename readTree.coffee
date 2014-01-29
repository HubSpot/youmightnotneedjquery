fs = require('fs')

readFileTree = require('readfiletree')

get = (cb) ->
  readFileTree 'comparisons/', (err, tree) ->
    if err
      cb(err)
      return

    out = {}

    for title, comps of tree
      out[title] = {}

      for name, comp of comps
        out[title][name] = {}

        for filename, code of comp
          [version, ext] = filename.split '.'

          out[title][name][version] ?= {}
          out[title][name][version][ext] = code

    cb null, out

module.exports = get
