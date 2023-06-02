const input = document.getElementById('validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const inputLength = event.target.value.length;
  const requiredLength = Number(input.dataset.length);

  if (inputLength === requiredLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}