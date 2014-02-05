function offset(el){
    box = el.getBoundingClientRect();
    docElem = document.documentElement;
    return {
        top: box.top  + (window.pageYOffset || docElem.scrollTop),
        left: box.left + (window.pageXOffset || docElem.scrollLeft)
    };
}
