const scrollingElement = (document.scrollingElement || document.body);

const scrollToBottom = () => {
   scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

const scrollToTop = () => {
   scrollingElement.scrollTop = 0;
}

// Require jQuery
const scrollSmoothToBottom = () => {
   $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight,
   }, 500);
}

// Require jQuery
const scrollSmoothToTop = () => {
   $(scrollingElement).animate({
      scrollTop: 0,
   }, 500);
}

setTimeout(function () {
  window.scrollTo(0, 1);
}, 1000);
