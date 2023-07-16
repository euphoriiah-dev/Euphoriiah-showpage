let currentSlide = 0; // Initialize slider counter to 0

function startSlider() {
  let imageCount = document.querySelectorAll("img.gallery-pictures"); // We select img who have gallery-picture ID

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("img.gallery-pictures");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector("ul");
  images.style.transform = `translateX(-${currentSlide * 450}px)`;

// For the slideshow always return to the first slide after reaching the last img
  currentSlide++;
if (currentSlide >= imageCount.length) {
  currentSlide = 0;
}
}
// Setting interval of use of the startSlider function 
setInterval(() => {
  startSlider();
}, 5000);