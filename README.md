# myFlix React app

# Project Overview
Building client-side for an app called MyFlix using React. It is based on the existing server-side code from myFlixAPI. The web application is hosted on Netlify at 'xx'. 
If you would like to test the application, just register yourself and feel free to use it.

# Project Goals
Create a single page application that allows users to do the following:
* Register and create a user profile
* View a list of movies
* View details about a single movie, including the genre, director, and description of the movie
* Add movies to a favorites list
* Remove movies from the favorites list
* Update the user information
* Delete the profile  

# Main view
* Returns ALL movies to the user (each movie item with an image, title, and description)
* Filtering the list of movies with a 'search' feature
* Ability to select a movie for more details
* Ability to log out
* Ability to navigate to Profile view
* Single Movie view

# Single Movie view
* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites

# Login view
* Allows users to log in with a username and password

# Signup view
* Allows new users to register (username, password, email, date of birth)

# Profile view
* Displays user registration details
* Allows users to update their info (username, password, email, date of birth)
* Displays favorite movies
* Allows users to remove a movie from their list of favorites
* Allows existing users to deregister

# Technical Requirements
* The application must be a single-page application (SPA)
* The application must use state routing to navigate between views and share URLs
* The application must give users the option to filter movies using a "search" feature
* The application must use Parcel as its build tool
* The application must be written using the React library and in ES2015+
* The application must use Bootstrap as a UI library for styling and responsiveness
* The application must contain function components
* The application must be hosted online
* The application may use React Redux for state management of at least one feature (i.e.,
filtering movies)