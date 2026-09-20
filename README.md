# Team Card Gallery — What Was Wrong and How It Was Fixed

This project is a React + Vite team card gallery. It shows six profile cards, each with a name, role, avatar, and expandable bio. The app also has a counter that tracks how many cards are currently expanded.

This file explains the mistakes that were made during the build and the exact corrections that were applied.

---

## 1) The CSS file was never connected to the app

### Wrong code

```jsx
import { useState } from 'react'

function ProfileCard({ card, onCardClick, expanded }) {
  return (
    <div onClick={() => onCardClick(card)}>
      <img src={card.photoUrl} alt={card.name} />
      <h2>{card.name}</h2>
      <h3>{card.role}</h3>
    </div>
  )
}
```

This was the main problem. The component was being created, but the stylesheet was never imported into the file.

### Right code

```jsx
import { useState } from 'react'
import './App.css'

function ProfileCard({ card, onCardClick, expanded }) {
  return (
    <div
      className={`profile-card ${expanded ? 'expanded' : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className="card-header">
        <img src={card.photoUrl} alt={card.name} />
        <div>
          <h2>{card.name}</h2>
          <h3>{card.role}</h3>
        </div>
      </div>
    </div>
  )
}
```

### Why this matters

In React, CSS files do not load automatically just because they exist. You must import them into the component file where they should be used. Without this import, the browser never receives the styling, so the page stays plain and unformatted.

---

## 2) The JSX did not match the CSS selectors

### Wrong code

```jsx
function ProfileCard({ card, onCardClick, expanded }) {
  return (
    <div onClick={() => onCardClick(card)}>
      <img src={card.photoUrl} alt={card.name} />
      <h2>{card.name}</h2>
      <h3>{card.role}</h3>

      {expanded && (
        <div>
          <p>{card.bio}</p>
          <a href={card.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      )}
    </div>
  )
}
```

This layout had no class names like `profile-card`, `card-header`, `card-details`, or `expanded-counter`. The CSS we wrote was targeting these classes, so nothing matched.

### Right code

```jsx
function ProfileCard({ card, onCardClick, expanded }) {
  return (
    <div
      className={`profile-card ${expanded ? 'expanded' : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className="card-header">
        <img src={card.photoUrl} alt={card.name} />
        <div>
          <h2>{card.name}</h2>
          <h3>{card.role}</h3>
        </div>
      </div>

      <div className="card-details">
        <p>{card.bio}</p>
        <a href={card.github} target="_blank" rel="noreferrer" className="github-link">
          GitHub
        </a>
      </div>
    </div>
  )
}
```

### Why this matters

CSS works by selecting elements through HTML structure and class names. If the JSX has no matching classes, the styling cannot reach the element. The app can still work, but it will look like plain unstyled markup.

---

## 3) The app root had no layout wrapper

### Wrong code

```jsx
return (
  <div>
    {card.map((person) => (
      <ProfileCard
        key={person.name}
        card={person}
        expanded={expandedCards.some((item) => item.name === person.name)}
        onCardClick={handleCardClick}
      />
    ))}
  </div>
)
```

This only rendered cards in a generic container with no page layout or counter.

### Right code

```jsx
return (
  <div className="app-shell">
    <div className="expanded-counter">{expandedCards.length} expanded</div>

    <div className="card-grid">
      {card.map((person) => (
        <ProfileCard
          key={person.name}
          card={person}
          expanded={expandedCards.some((item) => item.name === person.name)}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  </div>
)
```

### Why this matters

The page needed a main wrapper around the gallery and the counter. The CSS for `app-shell`, `card-grid`, and `expanded-counter` depends on those wrappers being present. Without them, the layout cannot be centered, sized, or spaced properly.

---

## 4) The CSS file was empty or leftover starter code

### Wrong code

The original `src/App.css` was empty or contained the default template styles, which were unrelated to the project.

Example from the starter template:

```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: red;
}
```

This code was not connected to the gallery design, and it did not define the actual card layout.

### Right code

```css
:root {
  --bg: #f3f6fb;
  --panel: #ffffff;
  --text: #162033;
  --muted: #677489;
  --accent: #4f6ef7;
  --accent-2: #7c5cff;
}

.app-shell {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 64px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 24px;
}

.profile-card {
  background: var(--panel);
  border-radius: 22px;
  padding: 22px 20px 18px;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  transition: transform 0.25s ease;
}

.profile-card.expanded .card-details {
  max-height: 220px;
  opacity: 1;
  margin-top: 16px;
}
```

### Why this matters

A React app still needs a real stylesheet that reflects the actual UI. A leftover starter stylesheet is just noise. It does not match the user interface you want, and it does not control the layout or animation for your card gallery.

---

## 5) The app was missing a working card expand/collapse design

### Wrong code

```jsx
{expanded && (
  <div>
    <p>{card.bio}</p>
    <a href={card.github} target="_blank" rel="noreferrer">
      GitHub
    </a>
  </div>
)}
```

This was visible only when the card was expanded, but there was no styling for the hidden/shown state.

### Right code

```css
.card-details {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease, margin-top 0.25s ease;
}

.profile-card.expanded .card-details {
  max-height: 220px;
  opacity: 1;
  margin-top: 16px;
}
```

### Why this matters

The content was technically toggleable with React state, but it had no visual animation or layout behavior. CSS handles the smooth expand/collapse effect and makes the card feel professional instead of abrupt.

---

## 6) Image path issue

### Wrong code

```jsx
photoUrl: 'src/assets/download (73).jpg'
```

This type of path is risky in Vite. It may work depending on the project setup, but it is not the best or cleanest way to reference local assets in a React app.

### Better approach

```jsx
import profileImage from './assets/download (73).jpg'
```

Then use:

```jsx
photoUrl: profileImage
```

### Why this matters

When using Vite, imported assets are bundled correctly and are safer than a raw string path. This prevents broken images and makes the app more reliable across environments.

---

## 7) The final corrected structure

The fixed app now has:

- an imported stylesheet
- matching class names in JSX
- a card grid layout
- an expanded counter
- styled hover states
- animated expand/collapse sections
- responsive mobile layout
- a cleaner professional design

The final working structure looks like this:

```jsx
import { useState } from 'react'
import './App.css'

function ProfileCard({ card, onCardClick, expanded }) {
  return (
    <div
      className={`profile-card ${expanded ? 'expanded' : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className="card-header">
        <img src={card.photoUrl} alt={card.name} />
        <div>
          <h2>{card.name}</h2>
          <h3>{card.role}</h3>
        </div>
      </div>

      <div className="card-details">
        <p>{card.bio}</p>
        <a href={card.github} target="_blank" rel="noreferrer" className="github-link">
          GitHub
        </a>
      </div>
    </div>
  )
}

function App() {
  const [expandedCards, setExpandedCards] = useState([])

  function handleCardClick(card) {
    const isExpanded = expandedCards.some(
      (person) => person.name === card.name
    )

    if (isExpanded) {
      setExpandedCards(
        expandedCards.filter((person) => person.name !== card.name)
      )
    } else {
      setExpandedCards([...expandedCards, card])
    }
  }

  return (
    <div className="app-shell">
      <div className="expanded-counter">{expandedCards.length} expanded</div>

      <div className="card-grid">
        {card.map((person) => (
          <ProfileCard
            key={person.name}
            card={person}
            expanded={expandedCards.some((item) => item.name === person.name)}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  )
}
```

and the final stylesheet includes the card formatting, grid, hover transitions, and responsive behavior.

---

## Final note

The biggest mistakes were not about React logic itself. The real issues were:

- the stylesheet was not properly connected
- the JSX did not use the class names the CSS needed
- the original CSS was irrelevant starter code
- the layout structure did not match the intended design

Once those were fixed, the app worked correctly and looked like a complete team gallery.
