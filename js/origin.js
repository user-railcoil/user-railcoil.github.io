var body = document.querySelector( 'body' );
var design = document.getElementById( 'design' );
var behavior = document.getElementById( 'behavior' );

function colorBackground() {
  body.style.backgroundColor = '#0bb';
}
function removeBackground() {
  body.style.backgroundColor = '#eee';
}

design
  .addEventListener( 'mouseover', colorBackground );

design
  .addEventListener( 'mouseout', removeBackground );

behavior
  .addEventListener( 'mouseover', colorBackground );

behavior
  .addEventListener( 'mouseout', removeBackground );
