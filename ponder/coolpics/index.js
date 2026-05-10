// MODAL LOGIC
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('.modal-pic');
const closeButton = modal.querySelector('.close-viewer');

const images = document.querySelectorAll('.cool-pic');
images.forEach(image => {
  image.addEventListener('click', openModal);
});

function openModal(e) {
  const img = e.target;
  const full = img.getAttribute('src').replace('-sm', '-full');

  modalImage.src = full;
  modalImage.alt = img.getAttribute('alt');
  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});



// MENU NAVIGATION CODE
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log('toggling menu');
  nav.classList.toggle('hide');
}