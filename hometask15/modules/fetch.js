import { categoryDrop, titleDrop } from './variables.js';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    await response.json().then((value) => {
      if (Array.isArray(value)) {
        value.map((item) => {
          const newA = document.createElement('a');
          const listItem = categoryDrop.appendChild(newA);
          listItem.innerHTML = item;
          categoryDrop.classList.add('show');
        });
      } else {
        value['entries'].map((i) => {
          const newA = document.createElement('a');
          const listItem = titleDrop.appendChild(newA);
          listItem.innerHTML = i['API'];
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
