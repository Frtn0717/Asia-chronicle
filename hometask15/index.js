import drawHtmlLayout from './modules/draw-layout.js';
import { fetchCategories } from './modules/fetch.js';
import { categoriesDrop } from './modules/variables.js';

window.onload = fetchCategories('https://api.publicapis.org/categories').then(
  (result) => drawHtmlLayout(result)
);

categoriesDrop.onchange = () => {
  const category = categoriesDrop.value;

  fetchCategories(
    `https://api.publicapis.org/entries?category=${category}&title`
  ).then((result) => drawHtmlLayout(result));
};
