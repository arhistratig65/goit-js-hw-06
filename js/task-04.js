const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const decrementBtn = counter.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const updateCounterValue = () => {
  valueSpan.textContent = counterValue;
};

const incrementCounter = () => {
  counterValue += 1;
  updateCounterValue();
};

const decrementCounter = () => {
  counterValue -= 1;
  updateCounterValue();
};

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

updateCounterValue();