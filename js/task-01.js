const categoriesList = document.querySelectorAll(`.item`);
const numberOfCategories = categoriesList.length;
console.log(`Number of categories:  ${numberOfCategories}`);

const titles = [...categoriesList].map((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements:${element.lastElementChild.children.length}`);
});
