let 
  head = document.querySelector( 'head' ),
  meta = document.createElement( 'meta' ),
  essential = document
    .querySelector( '.essential' ),
  advanced = document
    .querySelector( '.advanced' ),
  professional = document
    .querySelector( '.professional' );

meta.name = 'theme-color';
meta.content = '#0bb';

function blueStatus() {
  head.appendChild( meta );
}    
function whiteStatus() {
  meta.remove();
}

essential
  .addEventListener( 'mouseover', blueStatus );
advanced
  .addEventListener( 'mouseover', whiteStatus );
professional
  .addEventListener( 'mouseover', whiteStatus );
