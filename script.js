// SLIDESHOW SETTINGS
let currentSlide = 0; // Initialize slider counter to 0

function startSlider() {
  let imageCount = document.querySelectorAll("img.gallery-pictures"); // We select img who have gallery-picture ID

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("img.gallery-pictures");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector("ul");
  images.style.transform = `translateX(-${currentSlide * 250}px)`;

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

// MIDDLE PAGE SCROLLING ANIMATIONS 
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});