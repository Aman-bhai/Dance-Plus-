# Dance Academy Website

This is a sample website for a dance academy, built using Node.js, EJS templates, Passport.js for authentication, and MongoDB Atlas for data storage. Images are sourced from pixabay and Pexels and All Data that is inside the this application is sample data or fake data.

## Features

- User authentication with login and signup functionality
- Fully functional contact page with data sent to MongoDB Atlas
- Images sourced from Pexels

## Prerequisites

- Node.js
- Nodemon (for development)

## Getting Started

### Clone the Repository

-bash
git clone https://github.com/yourusername/dance-academy.git
cd dance-academy

### Install Dependencies
Make sure you have Node.js and Nodemon installed. Run the following command to install all necessary packages:
npm install

### Run the Application
Use Nodemon to start the server:
nodemon .\index.js

## Project Structure
- index.js - Main server file
- views/ - Contains EJS templates
- public/ - Static files (CSS, JavaScript, images)
- models/ - Mongoose models for MongoDB collections
- config/ - Configuration files (e.g., Passport setup)

### Authentication
This project uses Passport.js for user authentication. Signup and login details are stored in MongoDB Atlas.

### Contact Page
The contact page allows users to send messages, which are stored in MongoDB Atlas for further processing.

### Acknowledgements
- Node.js
- Express
- EJS
- Passport.js
- MongoDB Atlas
- Pexels and pixabay




