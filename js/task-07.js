const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

const resizeText = (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
};

input.addEventListener(`input`, resizeText);
