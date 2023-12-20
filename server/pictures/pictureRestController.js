const { handleError } = require("../utils/errorHandling");

const getPhotosByCategory = async (req, res) => {
  const category = req.params.categories;
  const page = req.query.page || 1; // Get the page number from the query string, default to 1

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=9&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }
    const data = await response.json();
    res.send(data.hits);
  } catch (error) {
    handleError(res, 500, `API Error: ${error.message}`);
  }
};
exports.getPhotosByCategory = getPhotosByCategory;
