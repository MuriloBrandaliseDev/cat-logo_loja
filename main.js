const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
  const width = items[currentIndex].offsetWidth;
  track.style.transform = `translateX(-${width * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta ao primeiro item
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // Vai para o último item
  }
  updateCarousel();
});

// Inicializar o carrossel
updateCarousel();
