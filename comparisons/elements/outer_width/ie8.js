function outerWidth(el, includeMargin){

    var includeMargin = includeMargin || false;

    //the computed width of the element, with borders and padding, but without margin..
    var width = el.offsetWidth;

    if(includeMargin){

      var style = el.currentStyle || window.getComputedStyle(el);

      //adding margin to end result
      width += parseInt(style.marginTop) + parseInt(style.marginBottom);

    } 

    return width;

  }

  outerWidth(el, true);