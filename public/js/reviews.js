var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  const review = document.querySelectorAll('.review')
    const buttons = document.querySelectorAll('.manual-btn')
  if (n > review.length) {slideIndex = 1}
    if (n < 1) {slideIndex = review.length}
    for (i = 0; i < review.length; i++) {
      review[i].style.display = 'none';
    }
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(' active', '');
    }
  review[slideIndex-1].style.display = 'block';
  buttons[slideIndex-1].className += ' active';
}