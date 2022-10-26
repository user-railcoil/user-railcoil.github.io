var body = document.querySelector( 'body' );
var one = document.getElementById( 'one' );
var three = document.getElementById( 'three' );

function colorBackground() {
  body.style.backgroundColor = '#0bb';
}
function removeBackground() {
  body.style.backgroundColor = '#eee';
}

one
  .addEventListener( 'mouseover', colorBackground );

one
  .addEventListener( 'mouseout', removeBackground );

three
  .addEventListener( 'mouseover', colorBackground );

three
  .addEventListener( 'mouseout', removeBackground );
