# Team Card Gallery

## Project Title
Team Card Gallery

## Purpose
This project is a React application that displays a gallery of team member cards. Each card contains a profile image, name, role, and expandable details. The app demonstrates how to work with arrays, props, state, and event handling in React.

## What I Built
- A reusable profile card component
- A list of six team members rendered with JavaScript map()
- Click-to-expand cards that reveal a bio and GitHub link
- A counter showing how many cards are currently expanded
- A responsive grid layout for desktop and mobile screens

## Technologies Used
- React
- Vite
- JavaScript
- CSS

## Project Structure
- `src/App.jsx` — main app logic and data
- `src/App.css` — styling for layout and card design
- `src/main.jsx` — app entry point

## How It Works
1. A data array stores team member information.
2. The array is mapped into reusable card components.
3. Each card receives props such as name, role, and photo URL.
4. Clicking a card toggles whether it is expanded.
5. The expanded state is tracked using React `useState`.
6. The counter updates based on the number of expanded cards.

## Key Learning Outcomes
- Understanding reusable components
- Using props to pass data
- Managing state with React hooks
- Creating interactive UI with click events
- Styling responsive layouts with CSS

## Challenges Faced
One major challenge was making the CSS connect correctly to the React component structure. The app was not displaying the styles properly until the stylesheet was imported and the JSX classes matched the CSS selectors.

## Final Result
The app displays a polished card gallery with smooth transitions, hover effects, and expandable details for each team member.

## Run the Project
```bash
npm install
npm run dev
```

## Submission Note
This project shows the use of React state, component reuse, and UI interaction in a real-world team gallery layout.
