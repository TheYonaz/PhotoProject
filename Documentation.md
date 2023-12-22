PhotoProject

Photo Browsing App - React Frontend Documentation
Overview

The Photo Browsing App allows users to view, sort, and paginate through images fetched from an external API. It is built using React, Redux for state management, and Redux Thunk for asynchronous actions.
Component Structure

    PhotoGrid Component: This is the main component that displays the grid of photos. It also includes pagination controls and sorting functionality.

    Modal Component (./photoInfo/Modal): Displays detailed information about a selected photo in a modal view.

    SortingBar Component (./selectors/SortingBar): Allows users to select a sorting order for the photos.

    CategorySelector Component (./selectors/CategorySelector): Enables users to select or search for a photo category.

    PaginationControls Component (./selectors/PaginationControls): Provides buttons for navigating between pages of photos.

Key Features

    Photo Display: Photos are displayed in a grid layout.
    Pagination: Users can navigate through different pages of photos.
    Sorting: Photos can be sorted by popularity, latest, ID, or date.
    Modal View: Clicking on a photo opens a modal with more details.
    Dynamic Category Selection: Users can choose or search for different categories of photos.

Redux Setup

    Actions: Defined actions for fetching photos, setting current page, and setting current category.
    Reducers: A reducer (photosReducer) to handle photo-related state based on dispatched actions.
    Store: A Redux store that combines reducers and integrates with Redux Thunk for async actions.

Thunk Actions

    fetchPhotos: Fetches photos based on category, page number, and sorting criteria.

Styling

    Styling is done using CSS modules, with stylesheets located in the same directory as their respective components.

Installation and Running

    Run npm install to install dependencies.
    Use npm start to start the application in development mode.

Folder Structure

    src: Main source folder.
        components: Contains all React components.
        REDUX: Contains Redux-related files like actions, reducers, and store.

Usage

    Viewing Photos: Photos are automatically fetched and displayed on the grid.
    Sorting and Selecting Categories: Use the sort options and category selector to filter and sort photos.
    Viewing Photo Details: Click on a photo to view detailed information in a modal.

Backend Documentation for Pixabay Image Gallery Project
Overview

The backend of the Pixabay Image Gallery Project is a Node.js application using Express.js. It serves as an intermediary between the frontend and the Pixabay API, handling image fetching with sorting and pagination capabilities.
Key Features

    Image Fetching: Retrieves images from the Pixabay API based on category, page number, and sorting criteria.
    Sorting: Supports sorting images by popularity, latest, ID, or date.
    Pagination: Enables fetching images page-by-page.

Setup

    Install Dependencies: Run npm install to install necessary packages.
    Starting the Server: Execute npm run dev.

Configuration

    PORT: Set in the environment configuration (default: 8181).
    CORS: Configured to allow requests from specific origins.
    Logging: Uses Morgan for logging HTTP requests and responses.

Endpoints
GET /photos/:category

Fetches images based on the specified category with optional pagination and sorting.

    Path Parameters:
        category: Category of images to fetch.
    Query Parameters:
        page: Page number for pagination (default: 1).
        sort: Sorting parameter (popular, latest, id, date).

Error Handling

    Implements custom error handling for API and server errors.
    Uses handleError function to standardize error responses.

Logging

    Utilizes Morgan combined with Chalk for colored logging of HTTP requests.
    Custom log format includes method, URL, status code, and response time.

CORS Configuration

    Configured in cors.js.
    Set to allow requests from specified origins (localhost ports 8181, 5500, 3001, 3000).

Modules and Utilities

    errorHandling.js: Contains functions for handling errors.
    logger.js: Configures Morgan logger with custom formatting.
    timeService.js: Utility to get the current date and time in a readable format.
    cors.js: Sets up CORS with specific origins.

Architecture

    Router (router.js): Central router that directs to specific routes.
    Photo Routes (photosRoutes.js): Defines routes related to photo fetching.
    Rest Controller (pictureRestController.js): Handles business logic for fetching and sorting images.
