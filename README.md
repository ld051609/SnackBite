# SnackBite

SnackBite is a MERN stack application that allows users to search for different types of snacks, view detailed information about each snack, and more. This project demonstrates the capabilities of the MERN stack (MongoDB, Express.js, React.js, and Node.js) in creating a dynamic, full-featured web application.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Snacks**: Users can search for snacks by name or type.
- **Snack Details**: View detailed information about each snack including ingredients, nutritional value, and user reviews.
- **User Authentication**: Secure user registration and login functionality.
- **Responsive Design**: Mobile-friendly design ensures a great user experience on all devices.


## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/snackbite.git
    cd snackbite
    ```

2. **Install server dependencies**:
    ```bash
    cd server
    npm install
    ```

3. **Install client dependencies**:
    ```bash
    cd client
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the `server` directory with the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application**:
    ```bash
    cd server
    npm run dev
    ```

## Usage

1. **Register**: Create an account to start exploring snacks.
2. **Login**: Log in with your credentials.
3. **Search Snacks**: Use the search bar to find snacks by name or type.
4. **View Details**: Click on a snack to view detailed information.

## Technologies Used

- **MongoDB**: For the database.
- **Express.js**: For the backend framework.
- **React.js**: For the frontend framework.
- **Node.js**: For the backend runtime environment.
- **JWT**: For user authentication.

## Project Structure

```plaintext
snackbite/
├── client/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── server/                  # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .gitignore
├── README.md
└── package.json
