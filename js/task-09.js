function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const button = document.querySelector('.change-color');
const text = document.querySelector('.color')


button.addEventListener('click', () => {
  text.textContent = getRandomHexColor();
  document.body.style.backgroundColor = text.textContent;
})