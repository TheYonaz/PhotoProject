PhotoProject

This project is a full-stack web application that provides a user interface to browse and interact with images sourced from the Pixabay API. It includes a React frontend and a Node.js backend, offering features like image sorting, pagination, category selection, and a detailed view of each image.
Features

    Category Selection: Users can select different image categories to browse.
    Sorting: Images can be sorted based on popularity, latest, ID, or date.
    Pagination: Users can navigate through different pages of image results.
    Image Details: Clicking on an image opens a modal displaying detailed information.

Frontend

The frontend is built using React and utilizes Redux for state management.
Key Components

    PhotoGrid: Displays images in a grid layout.
    CategorySelector: Allows users to select image categories.
    SortingBar: Provides sorting options for the images.
    PaginationControls: Enables navigating through different pages.

Setup

    Install dependencies: npm install
    Start the React app: npm start

Backend

The backend is a Node.js server using Express to handle API requests to the Pixabay API.
Endpoints

    GET /photos/:category: Fetches images based on the specified category.
        Query Parameters:
            page: Page number for pagination.
            sort: Sorting parameter (popular, latest, id, date).

Setup

    Install Node.js dependencies: npm install
    Start the server: npm run dev

Configuration

    Pixabay API key: Set your Pixabay API key in the backend configuration.
    CORS settings: Adjust CORS settings in cors.js for different environments.

Usage

After starting both the frontend and backend, navigate to http://localhost:3000 (or the configured port) in your web browser to use the application.
Error Handling

The backend includes comprehensive error handling to manage API errors gracefully and provide meaningful error messages to the frontend.
Logging

Morgan logger is used for logging HTTP requests and responses, enhancing debugging and monitoring capabilities.
