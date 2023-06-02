function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputNumber = document.querySelector('#controls input');

function createBoxes(amount) {
  const boxContainer = document.querySelector('#boxes');
  // елементи
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    // властивостi
    const size = 30 + (10 * i);
    const color = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    // елементи в контейнер
    boxContainer.appendChild(box); 
  }
}

function destroyBoxes() {
  const boxContainer = document.querySelector('#boxes');
  while (boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
}

btnCreate.addEventListener('click', () => createBoxes(inputNumber.value));
btnDestroy.addEventListener('click', destroyBoxes);