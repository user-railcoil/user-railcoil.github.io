let 
  body = document.querySelector( 'body' ),
  one = document.getElementById( 'one' ),
  three = document.getElementById( 'three' ),
  html = document.documentElement;

function colorBackground() {
  html.style.display = 'none';
  html.style.display = 'block';
  
  body.style.backgroundColor = '#0bb';

  document.head.innerHTML = 
    `
    <meta charset='UTF-8'>
    <meta 
      name='viewport'
      content='width=device-width, initial-scale=1.0'
    >
    <meta name="theme-color" content="#0bb">
    <link rel='stylesheet' href='css/base.css'>
    <title>trifold</title>         
    `; 
}
function removeBackground() {
  html.style.display = 'none';
  html.style.display = 'block';
  
  body.style.backgroundColor = '#eee';

  document.head.innerHTML = 
    `
    <meta charset='UTF-8'>
    <meta 
      name='viewport'
      content='width=device-width, initial-scale=1.0'
    >
    <meta name="theme-color" content="#eee">
    <link rel='stylesheet' href='css/base.css'>
    <title>trifold</title>         
    `; 
}

one
  .addEventListener( 'mouseover', colorBackground );

one
  .addEventListener( 'mouseout', removeBackground );

three
  .addEventListener( 'mouseover', colorBackground );

three
  .addEventListener( 'mouseout', removeBackground );
