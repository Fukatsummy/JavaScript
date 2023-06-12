const redButton = document.querySelector('.red');
const blueButton = document.querySelector('.yellow');
const bodyElement = document.querySelector('body');

redButton.addEventListener('click', () => {
  bodyElement.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', () => {
  bodyElement.style.backgroundColor = 'yellow';
});