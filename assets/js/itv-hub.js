var slideIndex = 0;

showSlidesByClick(slideIndex);

function showSlidesByClick(n) {
  var i;
  var show = document.getElementsByClassName("shows");
  var dots = document.getElementsByClassName("slideIndicator");
  if (n > show.length) {slideIndex = 1}
  if (n < 1) {slideIndex = show.length}
  for (i = 0; i < show.length; i++) {
      show[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  show[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function plusSlides(n) {
  showSlidesByClick(slideIndex += n);
}
function currentSlide(n) {
  showSlidesByClick(slideIndex = n);
}

showSlides();
function showSlides() {
    plusSlides(1);
    setTimeout(showSlides, 2500);
}
