function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//
const input = document.querySelector(`input`);
const createButton = document.querySelector(`button[data-create]`);
const destroyButton = document.querySelector(`button[data-destroy]`);
const newCollection = document.querySelector(`#boxes`);

//

const createBoxes = () => {
  const inputValue = input.value;
  let newObject = [];
  for (let i = 0; i <= inputValue; i += 1) {
    if (i < inputValue) {
      const newElements = document.createElement(`div`);
      newObject.push(newElements);
    }
    newObject.map((element) => {
      element.style.backgroundColor = `${getRandomHexColor()}`;
      element.style.height = `${i * 10 + 30}px`;
      element.style.width = `${i * 10 + 30}px`;
      newCollection.prepend(element);
    });
  }
};

const destroyBoxes = () => {
  newCollection.innerHTML = ``;
};
//
createButton.addEventListener(`click`, createBoxes);
destroyButton.addEventListener(`click`, destroyBoxes);
