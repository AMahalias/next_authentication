# User Authentication Dashboard

A simple authentication system built with **Next.js** and **TypeScript** using **React Context** for user state management.

## Features
- Login page with email and name input
- Dashboard displays user info if logged in
- Login and logout functionality
- TailwindCSS for styling

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AMahalias/next_authentication.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

## File Structure
- **`/context/UserContext.tsx`**: Contains the `UserProvider`.
- **`/components`**: Contains reusable UI components like `Button.tsx`.
- **`/hooks/useAuth.ts`**: Custom hook to access authentication context.
- **`/pages/_app.tsx`**: Wraps app with `UserProvider` to provide authentication context.
- **`/pages/{index.tsx, dashboard.tsx, login.tsx}`**: Home, Dashboard, and Login pages for user authentication flow.
- **`/styles/globals.css`**: Global styles.
- **`/types/User.ts`**: TypeScript types for `User` and authentication context.

## Logic Overview

- **UserContext**: Uses `React Context` to share authentication state (user info).
- **Login Page**: Collects email and name, and updates the user context with `login()`.
- **Dashboard**: Displays user details or redirects to the login page if no user is authenticated.

## Styling
- TailwindCSS for responsive, utility-first styling.
