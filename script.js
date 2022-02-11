const h2 = document.createElement("h2");

document.querySelector("body").appendChild(h2);

//click event to hide service packages
function priceButton() {
  const priceElement = document.getElementById("packagePrices");
  if (priceElement.style.display === "none") {
    priceElement.style.display = "block";
  } else {
    priceElement.style.display = "none";
  }
}

//mouseover event to change images under getting started

//slideshow - see html for where code was found
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}