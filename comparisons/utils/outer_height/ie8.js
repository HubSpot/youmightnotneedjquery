function outerHeight(el, includeMargin){

    var includeMargin = includeMargin || false;
    
    //the computed height of the element, with borders and padding, but without margin.
    var height = el.offsetHeight;

    if(includeMargin){

      var style = el.currentStyle || window.getComputedStyle(el);

      //adding margin
      height += parseInt(style.marginTop) + parseInt(style.marginBottom);

    } 

    return height;

  }

  outerHeight(el, true);