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
  destroyBoxes();
  const inputValue = input.value;
  let newObject = [];

  for (let i = 0; i <= inputValue; i += 1) {
    if (i < inputValue) {
      const newElements = document.createElement(`div`);
      newObject.push(newElements);
    }
    let size = 30;
    newObject.map((element) => {
      size += 10;

      element.style.backgroundColor = `${getRandomHexColor()}`;
      element.style.height = `${size - 10}px`;
      element.style.width = `${size - 10}px`;
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
