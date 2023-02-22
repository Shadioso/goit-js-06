function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);
const changeColorButton = document.querySelector(`.change-color`);
const span = document.querySelector(`.color`);

const changeBodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
};

//
changeColorButton.addEventListener(`click`, changeBodyColor);
