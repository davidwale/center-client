**Authentication App**
======================

A responsive frontend web application with authentication features, designed for a seamless user experience. The app includes a landing page and essential authentication screens.

* * * * *

**Features**
------------

-   **User Authentication**

    -   Login/Register
    -   Email verification
    -   Password reset functionality
-   **Landing Page**

    -   Fully responsive design
    -   Modern UI/UX

* * * * *

**Screens**
-----------

-   **Login/Register**: User authentication for new and returning users.
-   **Verify Email**: Email verification flow for newly registered users.
-   **Forget Password**: Request a password reset.
-   **Reset Password**: Securely update the password.
-   **Landing Page**: Overview of the application with navigation to authentication features.

* * * * *

**Tech Stack**
--------------

-   **Frontend**: React (with Vite) and Tailwind CSS
-   **Routing**: React Router DOM
-   **State Management**: React Hooks

* * * * *

**Prerequisites**
-----------------

Ensure you have the following installed on your system:

-   Node.js (>= 16.x.x)
-   npm or yarn
-   Git (optional, for cloning the repository)

* * * * *

**Installation and Setup**
--------------------------

Follow these steps to run the application locally:

### 1\. **Clone the Repository**

- git clone https://github.com/davidwale/center-client.git
- cd 

### 2\. **Install Dependencies**

Use npm or yarn to install project dependencies:

- npm install
- yarn install

### 3\. **Environment Configuration**

Create a `.env` file in the root directory to set up environment variables. Below is an example `.env` file:

- VITE_APP_API_PATH=http://localhost:5000

### 4\. **Run the Application**

Start the development server:
- npm run dev

The application will be available at `http://localhost:5173` by default.

* * * * *

**How to Use**
--------------

1.  **Landing Page**: Start from the landing page to explore the app.
2.  **Authentication**:
    -   Navigate to the login or register page.
    -   Enter your credentials or create a new account.
    -   Verify your email address.
3.  **Forget/Reset Password**:
    -   Use the "Forgot Password" link to initiate a password reset.
    -   Follow the steps to securely reset your password.

* * * * *

**Build for Production**
------------------------

To build the application for production:
- npm run build
- yarn build

The production-ready files will be in the `dist` directory.