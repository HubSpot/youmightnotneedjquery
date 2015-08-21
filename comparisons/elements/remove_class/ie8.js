if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(
      new RegExp( '(^|\\s)('
        + className.split( \s ).join( '|' ).replace( /\|{2,}/gm , '|' )
        + ')(\\s|$)' , 'gm'
      )
      , ' '
  ).join( ' ' ).replace( /(^\s+)|(\s{2,})|(\s+$)/gm , '' );
