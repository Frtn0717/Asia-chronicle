const fetchData = {
  fetchCategories: async function (url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const value = await response.json();
      return value;
    } catch (error) {
      console.log(error);
    }
  },
};

export const fetchCategories = fetchData.fetchCategories;
