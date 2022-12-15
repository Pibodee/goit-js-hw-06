const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const items = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.classList.add("item");
  ingredientItem.textContent = ingredient;
  return ingredientItem
}
)

list.append(...items);