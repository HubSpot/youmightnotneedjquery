function closest(el, sel) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(b) {
        b = (this.document || this.ownerDocument).querySelectorAll(b);
        for (var a = b.length; 0 <= --a && b.item(a) !== this;);
        return -1 < a;
    });
    Element.prototype.closest || (Element.prototype.closest = function(b) {
        var a = this;
        do {
            if (a.matches(b)) return a;
            a = a.parentElement || a.parentNode;
        } while (null !== a && 1 === a.nodeType);
        return null;
    });
    return el.closest(sel);
};

closest(el, sel);
