# Employee Management System

A React + Vite based Employee Management System demo project.
This app includes admin login, employee login, employee signup, task assignment, task status updates, and localStorage persistence.

## Project Overview

This project was built to practice core React concepts in a realistic mini workflow.
The app supports two roles:

- `Admin`: can log in and assign tasks to employees
- `Employee`: can sign up, log in, view assigned tasks, and update task status

The project does not use a backend.
Instead, it uses Context API for shared state and localStorage for persistence.

## Features

- Admin login
- Employee login
- Employee signup
- Role-based dashboard rendering
- Task assignment by admin
- Task status updates: new, active, completed, failed
- Task count summary cards
- Persistent data with localStorage

## Tech Stack

- React
- Vite
- JavaScript
- Context API
- Tailwind CSS
- localStorage

## Project Structure

```text
src/
  components/
    Auth/
    Dashboard/
    other/
    TaskList/
  context/
  utils/
  App.jsx
  main.jsx
```

## How It Works

1. `main.jsx` renders the app and wraps it with `AuthProvider`
2. `AuthProvider` loads employee data from localStorage and shares it using Context API
3. `App.jsx` handles login, signup, and role-based rendering
4. Admin dashboard allows task creation and employee summary view
5. Employee dashboard shows task counts and task cards
6. Task status changes update both UI state and localStorage

## Run Locally

```bash
npm install
npm run dev
```

Open the Vite URL in your browser, usually:

```text
http://localhost:5173
```

## Default Credentials

### Admin

- Email: `admin@me.com`
- Password: `123`

### Sample Employees

- `e@e.com` / `123`
- `priya@me.com` / `123`
- `employee3@example.com` / `123`
- `employee4@example.com` / `123`
- `employee5@example.com` / `123`

You can also create a new employee account using the signup option on the login screen.

## React Concepts Used

- Components
- Props
- `useState`
- `useEffect`
- `useContext`
- Conditional rendering
- Controlled forms
- List rendering with `map`
- Immutable state updates

## Improvements Made

- Fixed admin credential mismatch
- Fixed localStorage reset issue
- Fixed task creation and task state update bugs
- Added employee signup flow
- Added working task status actions
- Improved login UI sizing
- Cleaned lint issues

## Current Limitations

- No backend or database
- Authentication is demo-only and localStorage based
- No password hashing
- No API integration
- No React Router based navigation
- Validation is basic

## Interview Talking Points

If you are presenting this project in an interview, you can explain it like this:

> This is a React-based Employee Management System demo where admin and employee roles see different dashboards. I used Context API for shared state, localStorage for persistence, controlled forms for login and signup, and conditional rendering for role-based UI. I also improved the project by fixing state bugs and adding signup and task status update flows.

## Notes Files

For interview preparation, these files are also included:

- `INTERVIEW_NOTES_EMS.md`
- `REACT_INTERVIEW_MASTER_NOTES.md`

## Future Improvements

- Connect to a real backend and database
- Add secure authentication
- Add React Router and protected routes
- Add server-side CRUD for employees and tasks
- Improve validations and error handling
