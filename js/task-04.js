const counterValue = document.querySelector(`#value`);
const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);
const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);
let showNumber = 0;

const changeValueOfNumber = {
  increment() {
    showNumber += 1;
    counterValue.textContent = showNumber;
  },
  decrement() {
    showNumber -= 1;
    counterValue.textContent = showNumber;
  },
};

incrementButton.addEventListener(`click`, changeValueOfNumber.increment);
decrementButton.addEventListener(`click`, changeValueOfNumber.decrement);
