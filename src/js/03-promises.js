const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);
let inputedData = '';

function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = formEl.elements;
  inputedData = {
    Delay: Number(delay.value),
    Step: Number(step.value),
    Amount: Number(amount.value),
  };

  if (
    inputedData.Delay < 0 ||
    inputedData.Step < 0 ||
    inputedData.Amount <= 0
  ) {
    return window.alert(
      `First delay and Delay step cannot be less than 0, Amount cannot be 0 or less`
    );
  }
  for (let i = 1; i <= inputedData.Amount; i += 1) {
    if (i >= 2) {
      inputedData.Delay += inputedData.Step;
    }

    createPromise(i, inputedData.Delay)
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
