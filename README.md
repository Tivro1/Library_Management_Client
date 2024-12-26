# Library Management

## Overview
Library Management is a web-based application designed to manage and organize books efficiently. It allows users to navigate through different categories of books, check availability, and manage library-related tasks with ease.

## Features
- **Book Categories:** Navigate through categories like Fiction, Non-Fiction, Science, and History.
- **Dynamic Routing:** Implemented category-specific navigation using React Router.
- **Interactive UI:** A user-friendly interface styled with Tailwind CSS and DaisyUI.
- **Backend Integration:** Backend API hosted on Vercel for fetching book details.
- **Authentication:** Firebase Authentication for user management.
- **Hosting:** Deployed frontend using Firebase Hosting.

## Tech Stack
### Frontend
- **React.js:** Component-based library for building the UI.
- **React Router:** For dynamic routing and navigation.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **DaisyUI:** Extends Tailwind CSS with prebuilt components.
- **React Toastify:** For notifications and alerts.

### Backend
- **Node.js & Express.js:** REST API creation.
- **MongoDB:** Database for managing book data.
- **Firebase Authentication:** For secure user authentication.

### Hosting
- **Firebase Hosting:** For deploying the frontend.
- **Vercel:** For deploying the backend.



## Deployment
- **Frontend:** Deployed on [Firebase Hosting](https://library-management-auth.web.app/)
- **Backend:** Deployed on [Vercel](https://libraymanagement-nu.vercel.app/)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Tivro1/library-management.git
   ```
2. Navigate to the project directory:
   ```bash
   cd library-management
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```
6. Deploy to Firebase Hosting:
   ```bash
   firebase deploy
   ```

## Notes
- Ensure that the backend API CORS settings allow requests from the Firebase hosting domain.
- All static assets (like images) should be placed in the `public` folder for proper deployment.

## Author
[Sourav Das Tivro](https://github.com/Tivro1)

## License
This project is open-source and available under the MIT License.

