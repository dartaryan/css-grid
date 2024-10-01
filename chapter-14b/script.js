const checkbox = document.querySelector('#theme-box');
const colortest = document.querySelector('.color-test');

checkbox.addEventListener('change', () => {
  colortest.style.setProperty('--dark-theme', checkbox.checked ? 'true' : 'false');
});
