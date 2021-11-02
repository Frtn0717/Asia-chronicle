const showTitles = () => {
  const category = categoryResult.value.toLowerCase().split(' ')[0];
  const url = `https://api.publicapis.org/entries?category=${category}&title`;

  variables.titleResult.classList.remove('show');

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
};
