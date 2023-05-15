const carousel = document.querySelector('.carousel');
const images = carousel.getElementsByTagName('img');
const imageWidth = images[0].offsetWidth;
let currentPosition = 0;

function moveCarousel() {
  currentPosition -= imageWidth;
  if (currentPosition < -(imageWidth * (images.length - 1))) {
    currentPosition = 0;
  }
  carousel.style.transform = `translateX(${currentPosition}px)`;
}

setInterval(moveCarousel, 5000);
dsda