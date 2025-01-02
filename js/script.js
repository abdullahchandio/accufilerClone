const mobileMenuButton = document.querySelector('button.md\\:hidden');
const mobileMenu = document.querySelector('div.md\\:hidden');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});




