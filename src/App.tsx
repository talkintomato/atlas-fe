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
        content: 'Grilled salmon fillet glazed with a sweet teriyaki sauce, served with steamed rice and vegetables.',
        link: '#salmon-teriyaki',
      },
      {
        id: 2,
        title: 'Classic Caesar Salad',
        content: 'Crisp romaine lettuce, parmesan cheese, and croutons, tossed with our homemade Caesar dressing.',
        link: '#classic-caesar-salad'
      },
      {
        id: 3,
        title: 'Margherita Pizza',
        content: 'A classic pizza with fresh mozzarella, tomatoes, basil, and our signature pizza sauce.',
        link: '#margherita-pizza'
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
  // Function to handle scroll to a section, typed with TypeScript
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 overflow-y-auto bg-gray-800 text-white">
        <nav>
          <ul>
            {menuSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="block hover:bg-gray-700 p-2 rounded w-full text-left"
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
          <section id={section.id} key={section.id} className="p-10 min-h-screen">
            {/* Ensure your Section component is typed correctly with TypeScript */}
            <Section
              label={section.label}
              description={section.description}
              items={section.items}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default App;
