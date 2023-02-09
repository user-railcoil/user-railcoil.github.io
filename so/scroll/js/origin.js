let 
  topButton = document.querySelector( '.top' ),
  bottomButton = document.querySelector( '.bottom' );

// scroll to specific values,
// same as window.scroll() method.
// for scrolling a particular distance, use window.scrollBy().
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

// scroll certain amounts from current position 
window.scrollBy({ 
  top: 0, // negative value acceptable
  left: 0, 
  behavior: 'smooth' 
});


function scrollToBottom() {
  bottomButton.scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function scrollToTop() {
  topButton.scrollIntoView({ 
    behavior: 'smooth' 
  });
}


topButton
  .addEventListener( 'click', scrollToBottom );
bottomButton
  .addEventListener( 'click', scrollToTop );  
