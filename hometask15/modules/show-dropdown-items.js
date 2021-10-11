import {
  categoryDrop,
  categoryResult,
  titleBtn,
  titleResult,
  titleDrop,
} from './variables.js';
import fetchData from './fetch.js';

const showDropdownItems = {
  showCategories: function () {
    const url = 'https://api.publicapis.org/categories';

    categoryResult.classList.remove('show');

    if (!categoryDrop.classList.contains('show')) {
      fetchData(url);
    } else {
      categoryDrop.classList.remove('show');

      while (categoryDrop.firstChild) {
        categoryDrop.removeChild(categoryDrop.firstChild);
      }
    }

    categoryDrop.onclick = function (event) {
      categoryResult.value = event.target.innerHTML;
      categoryResult.classList.add('show');
      categoryDrop.classList.remove('show');
      titleBtn.classList.add('show');
    };
  },
  showTitles: function () {
    const category = categoryResult.value.toLowerCase().split(' ')[0];
    const url = `https://api.publicapis.org/entries?category=${category}&title`;

    titleResult.classList.remove('show');

    if (!titleDrop.classList.contains('show')) {
      fetchData(url);
    } else {
      titleDrop.classList.remove('show');

      while (titleDrop.firstChild) {
        titleDrop.removeChild(titleDrop.firstChild);
      }
    }
    titleDrop.classList.add('show');

    titleDrop.onclick = function (event) {
      titleResult.value = event.target.innerHTML;
      titleResult.classList.add('show');
      titleDrop.classList.remove('show');
    };
  },
};

export const showCategories = showDropdownItems.showCategories;
export const showTitles = showDropdownItems.showTitles;
