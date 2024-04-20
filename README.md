# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies. The goal of this task is to debug the application, improve the styling, and potentially add enhancements.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)



## Getting Started

These instructions will help you set up the project locally on your machine.


### Installing

1. Unzip the project.

2. Navigate to the project directory:
   ```bash
   cd ps-assignment-main
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond


## Tasks

1. **Debugging:** 
    - Start the application and identify the 2 errors introduced.
    - Dive into the codebase and pinpoint the source of each error.
    - Rectify each error ensuring the application displays and functions correctly.
    - Offer a concise explanation of the root causes and detail your solutions.

2. **Styling:** 
    - Refactor the application's styling to match the provided [mockup](page_mockup.png)
    - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)
    - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.

4. **Upload to github:**
    - Once finished, upload the project to github.
    - Try to clone your code and run it - make sure all works after cloning
    - Make sure the site works as expected
  

## Solutions

1. **Debugging:**
   When started the application, after loading, there was a simple buttons list, that each had the text "View <MOVIE-NAME>" on it. When trying to press any of them I encountered the first issue, they were unresponsive. After a short dive in and inspection of the button functionality, I have realized that 'onMovieSelect' function was called without the 'movie' argument. So I added the missing argument. Then, a press on the button exposed the "like/dislike" functionality, but when trying to use it, another error occured, now with a message - 'TypeError: onFavoriteToggle is not a function', and after further inspection I understood that the property in not being passed in the MovieDetails tag that is being returned in App.js. Adding the property to invoke 'handleFavorite' in App.js solved this issue.
   
2. **Styling:** 
   Follow the same step of getting started the original app, to see my modifed styling.

