const carouselTrack = document.querySelector('.carousel-track');

let startX;
let scrollLeft;

carouselTrack.addEventListener('mousedown', (e) => {
  startX = e.pageX - carouselTrack.offsetLeft;
  scrollLeft = carouselTrack.scrollLeft;
});

carouselTrack.addEventListener('mousemove', (e) => {
  if (!startX) return;
  const x = e.pageX - carouselTrack.offsetLeft;
  const walk = (x - startX) * 2; // Velocidade de deslizamento
  carouselTrack.scrollLeft = scrollLeft - walk;
});

carouselTrack.addEventListener('mouseup', () => {
  startX = null;
});

carouselTrack.addEventListener('mouseleave', () => {
  startX = null;
});
