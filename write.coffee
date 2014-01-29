fs = require('fs')

readFileTree = require('readfiletree')

readFileTree 'comparisons/', (err, tree) ->
  if err
    console.error "Error building tree", err
    return

  fs.writeFileSync 'comparisons.json', JSON.stringify(tree)
