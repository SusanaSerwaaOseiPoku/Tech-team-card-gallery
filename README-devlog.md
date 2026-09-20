# Dev Log — Team Card Gallery

## Day 1: Building the App
I started by creating the React app and setting up the basic structure for the team card gallery. My goal was to build a simple interface that displays multiple cards and allows the user to click them to reveal more information.

## What I Learned
- React components make UI easier to manage
- Props let me pass data into each card
- State helps control interactions
- CSS is essential for turning plain HTML into a polished interface

## Mistakes I Made
At first, I created the cards and logic, but the CSS was not showing in the browser. I later discovered that the stylesheet was never imported into the app. I also noticed that the JSX structure did not include the class names used by the CSS, so the styles had no matching elements to apply to.

## Fixes I Applied
- Imported the stylesheet into `App.jsx`
- Added matching class names to each card and layout element
- Rebuilt the layout to include an app wrapper and a responsive card grid
- Replaced the default starter CSS with project-specific styles
- Added hover and expand animations to improve the user experience

## Code Reflection
This project helped me understand that building UI is not only about writing logic; it is also about making sure the structure and styling work together. A React app will not look right if the HTML, CSS, and state are not aligned.

## Current Status
The app is now working properly and shows a clean team gallery with expandable cards and a live counter. I can confidently say the UI is polished, responsive, and easier to understand.

## Next Ideas
- Add different card themes
- Add a search/filter option
- Add animations for entrance and exit
- Add real profile images from a local assets folder
