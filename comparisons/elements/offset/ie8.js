function offset(el){
box = el.getBoundingClientRect();
docElem = document.documentElement;
return {
        top: box.top  + ( window.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
        left: box.left + ( window.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
    };
}
