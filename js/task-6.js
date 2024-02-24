function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
let inputValue = 0;
create.addEventListener('click', () => {
  input.focus();
  if (input.value > 0 && input.value < 101) {
    createBoxes(input.value);
    input.value = '';
  }
});
let boxsize = 0;
let newDiv = 0;
destroy.addEventListener('click', () => {
  input.value = '';
  boxes.innerHTML = ' ';
});
function createBoxes(amount) {
  boxes.innerHTML = '';
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML('beforeend', newDiv);
    boxsize += 10;
  }
}
