// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const dataDays = document.querySelector('.value[data-days]');
const dataHours = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');
let currentTime = Date.now();
let selectedDate = null;
let timerId = null;

startBtn.addEventListener('click', onStartCounter);
startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < currentTime) {
      window.alert('Please choose a date in the future');
    } else {
      selectedDate = selectedDates[0].getTime();
      startBtn.removeAttribute('disabled');
    }
  },
};
const fp = flatpickr(inputEl, options);

function onStartCounter() {
  counter.start();
}
const counter = {
  start() {
    timerId = setInterval(() => {
      currentTime = Date.now();
      const targetTime = selectedDate - currentTime;
      updateTimerface(convertMs(targetTime));
      startBtn.setAttribute('disabled', 'true');
      inputEl.setAttribute('disabled', 'true');

      if (targetTime <= 1000) {
        this.stop();
      }
    }, 1000);
  },
  stop() {
    startBtn.setAttribute('disabled', 'true');
    inputEl.setAttribute('disabled', 'true');
    clearInterval(timerId);
    return;
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerface({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}
