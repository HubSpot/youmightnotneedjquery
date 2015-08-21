if (el.classList)
  el.classList.remove(className);
else
  el.className = el.className.replace(
      new RegExp( '(^|\\s)('
        + className.split( \s ).filter(
          function ( e ) { return e; }
        ).join( '|' )
        + ')(\\s|$)' , 'gm'
      )
      , ' '
  ).split( ' ' ).filter(
    function ( e ) { return e; }
  ).join( ' ' );
// dependent on filter, see polyFill for instance @ MDN :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill .
