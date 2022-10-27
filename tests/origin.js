var 
  html = document.documentElement,
  body = document.querySelector( 'body' ),
  button = document.querySelector( 'div' );

function colorBackground() {
  html.style.display = 'none';
  html.style.display = 'block';
  if( 
    body.style.backgroundColor == 
      'rgb(0, 187, 187)' 
  ){
    body.style.backgroundColor = '#eee';
    button.style.backgroundColor = '#0bb';
    document.head.innerHTML = 
      `
        <meta charset='UTF-8'>
        <meta 
          name='viewport'
          content=
            'width=device-width, initial-scale=1.0'
        >
        <meta name="theme-color" content="#f07">        
        <link rel='stylesheet' href='css/base.css'>
        <link rel='icon' href='favicon.png'>
        <title>Poop</title>      
      `;
  }
  else {
    body.style.backgroundColor = '#0bb';
    button.style.backgroundColor = '#222';
    button.style.color = 
      'rgba( 225,225,225,0.75 )';
    document.head.innerHTML = 
      `
      <meta charset='UTF-8'>
      <meta 
        name='viewport'
        content=
          'width=device-width, initial-scale=1.0'
      >
      <meta name="theme-color" content="#07f">        
      <link rel='stylesheet' href='css/base.css'>
      <link rel='icon' href='favicon.png'>
      <title>Poop</title>      
    `;    
  }
}

button.addEventListener( 
  'click', colorBackground
);
