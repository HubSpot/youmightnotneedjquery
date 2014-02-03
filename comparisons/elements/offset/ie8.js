function offset(el){
  var offset = {top: 0, left: 0};
    while(el != undefined){
        offset.left += el.offsetLeft;
        offset.top += el.offsetTop;
        el = el.offsetParent;
    }
    return offset;
}
