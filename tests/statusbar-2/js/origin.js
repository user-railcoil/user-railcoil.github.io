var 
  html = document.documentElement,
  body = document.querySelector( 'body' ),
  button = document.querySelector( 'button' );

function colorBackground() {
  html.style.display = 'none';
  html.style.display = 'block';
  if( 
    body.style.backgroundColor == 
      'rgb(0, 187, 187)' 
  ){
    body.style.backgroundColor = '#eee';
  }
  else {
    body.style.backgroundColor = '#0bb';
  }
}

button.addEventListener( 
  'click', colorBackground
);
