if (el.classList) {
    el.classList.toggle(className);
} else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);
    if (existingIndex >= 0)
        classes[existingIndex] = '';
    else
        classes.push(className);
    el.className = classes.join(' ');
}