// Utilize error handling utilities
const { handleError } = require("../utils/errorHandling");

// Async function to handle the GET request for photos by category
const getPhotosByCategory = async (req, res) => {
  // Extract category and page from the request parameters
  const category = req.params.categories;
  const page = req.query.page || 1;
  const sort = req.query.sort || "popular"; // default sort parameter

  try {
    // Construct the API URL with the provided parameters
    const apiUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&per_page=9&page=${page}&order=${sort}`;
    const response = await fetch(apiUrl);

    // Handle non-successful responses
    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    // Get the JSON response and sort if necessary
    let photos = await response.json();

    // Custom sorting if sort is 'id' or 'date'
    if (sort === "id") {
      photos.hits.sort((a, b) => a.id - b.id);
    } else if (sort === "date") {
      photos.hits.sort(
        (a, b) => new Date(b.webformatURL) - new Date(a.webformatURL)
      );
    }

    // Send sorted photos as response
    res.send(photos.hits);
  } catch (error) {
    // Utilize handleError function for error handling
    handleError(res, 500, `API Error: ${error.message}`);
  }
};

exports.getPhotosByCategory = getPhotosByCategory;
