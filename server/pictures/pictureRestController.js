const { handleError } = require("../utils/errorHandling");

const getPhotosByCategory = async (req, res) => {
  const category = req.params.categories;
  const page = req.query.page || 1;
  const sort = req.query.sort || "popular"; // default sort parameter

  try {
    const apiUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=9&page=${page}&order=${sort}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }
    let photos = await response.json();

    // Custom sorting if sort is 'id' or 'date'
    if (sort === "id") {
      photos.hits.sort((a, b) => a.id - b.id);
    } else if (sort === "date") {
      photos.hits.sort(
        (a, b) => new Date(b.webformatURL) - new Date(a.webformatURL)
      ); // Assuming 'webformatURL' contains the date
    }
    res.send(photos.hits);
  } catch (error) {
    handleError(res, 500, `API Error: ${error.message}`);
  }
};

exports.getPhotosByCategory = getPhotosByCategory;
