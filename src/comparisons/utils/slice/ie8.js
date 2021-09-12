function slice(els, start, end) {
    var f = Array.prototype.slice;
    try {
        f.call(document.documentElement)
    } catch (h) {
        Array.prototype.slice = function(g, b) {
            b = "undefined" !== typeof b ? b : this.length;
            if ("[object Array]" === Object.prototype.toString.call(this)) return f.call(this, g, b);
            var e = [];
            var a = this.length;
            var c = g || 0;
            c = 0 <= c ? c : Math.max(0, a + c);
            var d = "number" == typeof b ? Math.min(b, a) : a;
            0 > b && (d = a + b);
            d -= c;
            if (0 < d)
                if (e = Array(d), this.charAt)
                    for (a = 0; a < d; a++) e[a] = this.charAt(c + a);
                else
                    for (a = 0; a < d; a++) e[a] = this[c + a];
            return e;
        }
    }
    return els.slice(start, end);
};

slice(els, start, end);
