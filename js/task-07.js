const fontControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

  fontControl.addEventListener('input', () => {
    text.style.fontSize = fontControl.value + 'px';
  });