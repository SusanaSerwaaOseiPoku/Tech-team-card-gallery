//Exercise — Team Card Gallery
//Build a small gallery app that puts components, props, and state together:
//• Create a reusable ProfileCard component that accepts name, role, and photoUrl as props.
//• Render a list of at least 6 people using .map(), each rendered through ProfileCard.
//• Clicking a card toggles an "expanded" state on that card, revealing extra details (bio, GitHub link).
//• Add a counter at the top of the page showing how many cards are currently expanded.

const card = [
  {
    name: 'Cynthie',
    role: 'Web Developer',
    photoUrl: 'src/assets/download (73).jpg',
    bio: 'Cynthie is a passionate web developer with a love for creating intuitive user experiences.',
    github:"https://github.com/cynthie"
  },
  {
    name: 'Kayden',
    role: 'Scientist',
    photoUrl: 'src/assets/Kayden.jpg',
    bio: 'Kayden is a dedicated scientist with a focus on innovative research and development.',
    github:"https://github.com/kayden"
  },
  {
    name: 'Mark',
    role: 'AI Prompt Engineer',
    photoUrl: 'src/assets/Mark.jpg',
    bio: 'Mark is a skilled AI prompt engineer with expertise in creating effective prompts for various applications.',
    github:"https://github.com/mark"
  },
  {
    name: 'Carol',
    role: 'Fashion Star',
    photoUrl: 'src\\assets\\Click clack click clack.jpg',
    bio: 'Carol is a talented fashion designer with a keen eye for detail and a passion for creating stunning outfits.',
    github:"https://github.com/carol"
  },
  {
    name: 'Peter',
    role: 'Web Designer',
    photoUrl: 'src\\assets\\70720656643796861.jpg',
    bio: 'Peter is a creative web designer with a keen eye for aesthetics and a passion for crafting beautiful user interfaces.',
    github:"https://github.com/peter"
  },
  {
    name: 'Sean',
    role: 'Stylist',
    photoUrl: 'src\\assets\\492581278018222007.jpg',
    bio: 'Sean is a professional stylist with a talent for helping people find their perfect look and feel confident in their clothing.',
    github:"https://github.com/sean"
  },
]

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

export default App

