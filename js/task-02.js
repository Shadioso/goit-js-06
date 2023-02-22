const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createIngredientsList = ingredients.forEach((ingridient) => {
  const element = document.createElement(`li`);
  const list = document.querySelector(`#ingredients`);
  element.textContent = `${ingridient}`;
  element.classList.add(`item`);
  list.prepend(element);
});
