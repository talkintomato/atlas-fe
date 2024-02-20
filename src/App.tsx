import { useState } from 'react';
import Section from './components/Section';

const menuSections = [
  {
    id: 'featured-dishes',
    label: 'Featured Dishes',
    description: 'A selection of our most popular dishes, crafted with the finest ingredients.',
    items: [
      {
        id: 1,
        title: 'Salmon Teriyaki',
        description: 'Grilled salmon fillet glazed with a sweet teriyaki sauce, served with steamed rice and vegetables.',
        link: '#salmon-teriyaki',
        price: '9.99',
      },
      {
        id: 2,
        title: 'Classic Caesar Salad',
        description: 'Crisp romaine lettuce, parmesan cheese, and croutons, tossed with our homemade Caesar dressing.',
        link: '#classic-caesar-salad',
        price: '9.99',
      },
      {
        id: 3,
        title: 'Margherita Pizza',
        description: 'A classic pizza with fresh mozzarella, tomatoes, basil, and our signature pizza sauce.',
        link: '#margherita-pizza',
        price: '9.99',
      },
      {
        id: 4,
        title: 'Cheese Pizza',
        description: 'A classic pizza with fresh cheese and our signature pizza sauce.',
        link: '#cheese-pizza',
        price: '9.99',
      },
    ],
  },
  {
    id: 'appetizers',
    label: 'Appetizers',
    description: 'Start your meal with our exquisite appetizers.',
    items: [
      // Appetizers items here
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    description: 'Our main courses are designed to satisfy your hunger with the best ingredients.',
    items: [
      // Main courses items here
    ],
  },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(menuSections[0].id);

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      setActiveSection(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="pt-10 w-64 overflow-y-auto">
        <nav>
          <ul className="pl-5">
            {menuSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`block p-2 w-full text-left border-l-4 ${activeSection === section.id ? ' border-orange-500' : 'border-grey-100'}`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1 overflow-y-auto">
        {menuSections.map((section) => (
          <Section
            id={section.id}
            label={section.label}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
