// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
let startBtnDisabled = startBtn.setAttribute('disabled', 'true');
const currentTime = new Date();
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] > currentTime
      ? startBtn.removeAttribute('disabled')
      : window.alert('Please choose a date in the future');
  },
};
const fp = flatpickr(inputEl, options);

const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');
