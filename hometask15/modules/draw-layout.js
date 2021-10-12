import { categoriesDrop, titlesDrop } from './variables.js';

const drawHtmlLayout = (data) => {
  if (Array.isArray(data)) {
    data.map((item) => {
      const newOption = document.createElement('option');
      const listItem = categoriesDrop.appendChild(newOption);
      listItem.innerHTML = item;
      listItem.value = item;
      categoriesDrop.classList.add('show');
      listItem.classList.add('category');
    });
  } else {
    if (titlesDrop.classList.contains('show')) {
      titlesDrop.classList.remove('show');

      while (titlesDrop.firstChild) {
        titlesDrop.removeChild(titlesDrop.firstChild);
      }
    }
    data['entries'].map((i) => {
      const newOption = document.createElement('option');
      const listItem = titlesDrop.appendChild(newOption);
      listItem.innerHTML = i['API'];
      listItem.value = i['API'];
      titlesDrop.classList.add('show');
      listItem.classList.add('title');
    });
  }
};

export default drawHtmlLayout;
