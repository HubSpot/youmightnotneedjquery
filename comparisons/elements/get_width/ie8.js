function getWidth(el) {
    var d = /^\d+(px)?$/i;
    if (window.getComputedStyle) el = parseFloat(getComputedStyle(el, null).width.replace("px", ""));
    else {
        var c = el.currentStyle.width;
        if (d.test(c)) el = parseInt(c);
        else {
            d = el.style.left;
            var e = el.runtimeStyle.left;
            el.runtimeStyle.left = el.currentStyle.left;
            el.style.left = c || 0;
            c = el.style.pixelLeft;
            el.style.left = d;
            el.runtimeStyle.left = e;
            el = c;
        }
    }
    return el
};

getWidth(el);
