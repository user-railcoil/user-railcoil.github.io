let 
  head = document.querySelector( 'head' ),
  body = document.querySelector( 'body' ),
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
  body.style.backgroundColor = '#0bb';
}    
function whiteStatus() {
  meta.remove();
  body.style.backgroundColor = '#eee';  
}
function blueBackground() {
  body.style.backgroundColor = '#0bb';  
  meta.remove();
}

essential
  .addEventListener( 'mouseover', blueStatus );
advanced
  .addEventListener( 'mouseover', whiteStatus );
professional
  .addEventListener( 'mouseover', whiteStatus );
professional
  .addEventListener
    ( 'mouseover', blueBackground );
