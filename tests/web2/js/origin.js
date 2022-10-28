let 
  head = document.querySelector( 'head' ),
  meta = document.createElement( 'meta' ),
  essential = document
    .querySelector( '.essential' ),
  professional = document
    .querySelector( '.professional' );

meta.name = 'theme-color';
meta.content = '#0bb';

function blueStatus() {
  head.appendChild( meta );
}    

essential
  .addEventListener( 'mouseover', blueStatus );
