const inputScale = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



inputScale.addEventListener('input', event => {
  text.style.fontSize = `${event.target.valueAsNumber}px`;
})