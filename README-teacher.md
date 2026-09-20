# Team Card Gallery Project Documentation

## Overview
This project is a React application created to demonstrate the use of reusable components, props, and state in a small front-end interface. The app displays a collection of team member cards and allows users to expand details by clicking each card.

## Learning Objectives
- Create reusable UI components
- Pass data through props
- Use array mapping to render multiple items
- Manage interaction state with React hooks
- Build a responsive layout using CSS

## Implementation
The application uses a data array containing personal information such as name, role, photo URL, bio, and GitHub link. The array is mapped into repeated card components, and the `useState` hook is used to track which cards are currently expanded.

## Functional Requirements Met
- Reusable profile card component created
- Six team members rendered using `.map()`
- Clicking a card toggles expanded state
- Extra details appear when expanded
- A counter updates according to the number of expanded cards
- Layout is responsive and visually styled

## Technical Details
### React state
The state stores an array of expanded cards and checks whether a person is already expanded before adding or removing them.

### Component structure
The app is split into a reusable `ProfileCard` component and the main `App` component.

### Styling
The stylesheet controls layout, colors, spacing, borders, shadows, hover effects, and card expansion animation.

## Problems Identified and Corrected
During development, several issues affected the appearance of the project:

1. The stylesheet was not imported into the app.
2. The JSX structure did not include the class names expected by the CSS.
3. The project initially used starter CSS that did not match the design.
4. The card layout needed a proper container and grid structure.

These issues were fixed by importing the stylesheet, adding the correct class names, creating the right app layout wrappers, and rewriting the CSS to match the final UI.

## Result
The gallery now functions properly and displays a clean, responsive, modern card interface. The cards expand smoothly and the counter updates in real time.

## How to Run
```bash
npm install
npm run dev
```
