const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
  btn.classList.toggle('change');
  nav.classList.toggle('hide');
}