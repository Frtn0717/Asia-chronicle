const wrap = document.querySelector(".wrapper");
const titleBtn = document.querySelector(".title-btn");
const categoryBtn = document.querySelector(".category-btn");
const dropdown = document.querySelector(".dropdown");
const categoryDrop = document.querySelector(".dropdown-category");
const categoryResult = document.querySelector(".category-result");
const titleDrop = document.querySelector(".dropdown-title");
const titleResult = document.querySelector(".title-result");

const showCategories = () => {
  const url = "https://api.publicapis.org/categories";

  categoryResult.classList.remove("show");

  if (!categoryDrop.classList.contains("show")) {
    fetchData(url);
  } else {
    categoryDrop.classList.remove("show");

    while (categoryDrop.firstChild) {
      categoryDrop.removeChild(categoryDrop.firstChild);
    }
  }

  categoryDrop.onclick = function (event) {
    categoryResult.value = event.target.innerHTML;
    categoryResult.classList.add("show");
    categoryDrop.classList.remove("show");
    titleBtn.classList.add("show");
  };
};

const showTitles = () => {
  const category = categoryResult.value.toLowerCase().split(" ")[0];
  const url = `https://api.publicapis.org/entries?category=${category}&title`;

  titleResult.classList.remove("show");

  if (!titleDrop.classList.contains("show")) {
    fetchData(url);
  } else {
    titleDrop.classList.remove("show");

    while (titleDrop.firstChild) {
      titleDrop.removeChild(titleDrop.firstChild);
    }
  }
  titleDrop.classList.add("show");

  titleDrop.onclick = function (event) {
    titleResult.value = event.target.innerHTML;
    titleResult.classList.add("show");
    titleDrop.classList.remove("show");
  };
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    await response.json().then((value) => {
      if (Array.isArray(value)) {
        value.map((item) => {
          const newA = document.createElement("a");
          const listItem = categoryDrop.appendChild(newA);
          listItem.innerHTML = item;
          categoryDrop.classList.add("show");
        });
      } else {
        value["entries"].map((i) => {
          const newA = document.createElement("a");
          const listItem = titleDrop.appendChild(newA);
          listItem.innerHTML = i["API"];
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
