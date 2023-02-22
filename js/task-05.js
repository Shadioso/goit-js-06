const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);
const callback = (event) => {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === ``) {
    textOutput.textContent = `Anonymous`;
  } else {
    event.currentTarget.value = textOutput.textContent;
  }
};
textInput.addEventListener(`input`, callback);
