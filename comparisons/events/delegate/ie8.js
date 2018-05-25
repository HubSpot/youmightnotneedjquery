document.addEventListener('click', function(e) {
    // loop parent nodes from the target to the delegation node
    for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches(<selector>)) {
            handler.call(target, e);
            break;
        }
    }
}, false);
