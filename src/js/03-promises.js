const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);
let inputedData = '';
const { delay, step, amount } = formEl.elements;

function onSubmit(evt) {
  evt.preventDefault();
  inputedData = {
    Delay: Number(delay.value),
    Step: Number(step.value),
    Amount: Number(amount.value),
  };
  for (let i = 1; i <= inputedData.Amount; i += 1) {
    let promiseDelay = inputedData.Delay + inputedData.Step * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay }); // Fulfill
      } else {
        rej({ position, delay }); // Reject
      }
    }, delay);
  });
}
