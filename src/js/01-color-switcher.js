const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let stopBtnDisabled = stopBtn.setAttribute('disabled', 'true');
let timerId = null;

startBtn.addEventListener('click', startClick);
startBtn.addEventListener('click', changeAttribute);

stopBtn.addEventListener('click', stopClick);
stopBtn.addEventListener('click', changeAttribute);

//функція встановлює інтервал
function startClick() {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyRef.style.backgroundColor = color;
  }, 1000);
}

// функція зупиняє інтервал
function stopClick() {
  clearInterval(timerId);
}

// функція робить кнопку неактивною
// функція змінює атрибут кнопки, якщо натискається інша кнопка

function changeAttribute() {
  startBtn.toggleAttribute('disabled');
  stopBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
