var siblings = Array.prototype.slice.call(el.parentNode.children)

siblings.filter(function(child){
    return child !== el
})
