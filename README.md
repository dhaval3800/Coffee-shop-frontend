# Coffee Shop App

## Introduction
This project is a React-based application for a coffee shop. Follow the steps below to set up and run the project on your local machine.

## Prerequisites
- Node.js (v18.x or higher)
- npm (v6.x or higher)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dhaval3800/Coffee-shop-frontend.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Coffee-shop-frontend
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Add the .env file:**
    - Create a `.env` file in the root directory of the project.
    - Add the following environment variable:
        ```plaintext
        REACT_APP_API_URL=
        REACT_APP_STRIPE_PUBLISHABLE_KEY=
        ```

5. **Start the project:**
    ```bash
    npm start
    ```



## Features

- **User Authentication:** Login and signup functionality.
- **View Coffee Shops:** Browse through a list of available coffee shops.
- **Shop Details:** View details of a specific coffee shop.
- **Wishlist:** Add coffee shops to a wishlist for future reference.
- **Shopping Cart:** Add coffee shops to a shopping cart for purchase.
- **User Profile:** View and manage user profile information.

## Technologies Used

- React
- Redux / toolkit
- React Router
- Ant Design (for UI components)
- Axios (for HTTP requests)
- Stripe (for cart Payments)


## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

