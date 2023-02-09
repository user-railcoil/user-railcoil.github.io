let 
  topButton = document.querySelector( '.top' ),
  bottomButton = document.querySelector( '.bottom' );

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

window.scrollBy({ 
  top: 0, 
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
