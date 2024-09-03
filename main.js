const products = document.querySelectorAll('.product-item');
const totalPages = Math.ceil(products.length / 9);
let currentPage = 1;

function showPage(page) {
  products.forEach((product, index) => {
    product.style.display = (index >= (page - 1) * 9 && index < page * 9) ? 'block' : 'none';
  });

  document.querySelector('.page-number').textContent = page;
}

document.querySelector('.next-page').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
});

document.querySelector('.prev-page').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
});

// Inicializar a primeira página
showPage(currentPage);



document.querySelector('.next-page').addEventListener('click', () => {
  document.querySelector('.titulo-produtos').scrollIntoView({ behavior: 'smooth' });
  // Adicionar lógica para trocar de página (se aplicável)
});

document.querySelector('.prev-page').addEventListener('click', () => {
  document.querySelector('.titulo-produtos').scrollIntoView({ behavior: 'smooth' });
  // Adicionar lógica para trocar de página (se aplicável)
});
