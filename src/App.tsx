import { useEffect, useMemo, useState } from 'react';
import Section from './components/Section';
import { useQuery } from '@apollo/client';
import { GET_MENU_QUERY, MenuData, MenuVars } from './graphql/queries';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<MenuData, MenuVars>(GET_MENU_QUERY, {
    // Impovement: load Dynamically through ENV or maybe a backend call
    variables: { id: "969c233a-7a9e-4806-a432-2ca87ba521b7" },
  });

  // Memoize menuSections to only recalculate when data?.menu.sections changes
  const menuSections = useMemo(() => data?.menu.sections ?? [], [data?.menu.sections]);

  // Initial active section state is set to the first section's id if available
  const [activeSection, setActiveSection] = useState<string>('');

  // Update activeSection state when menuSections data is valid and available
  // This effect runs only once when menuSections is first loaded
  useEffect(() => {
    if (menuSections.length > 0) {
      setActiveSection(menuSections[0].id);
    }
  }, [menuSections]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      setActiveSection(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-custom-bg">
      <div className="flex w-full max-w-screen-xl">
        {/* Sticky Sidebar */}
        <div className="sticky top-0 h-screen pt-10 overflow-y-auto w-64">
          <nav>
            <ul>
              {menuSections.slice().sort((a, b) => a.displayOrder - b.displayOrder).map((section) => (
                <li key={section.id + '-list'}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`block p-2 w-full text-left border-l-4 ${activeSection === section.id ? 'border-orange-500' : 'border-gray-100'}`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto">
          {menuSections.slice().sort((a, b) => a.displayOrder - b.displayOrder).map((section) => (
            <Section
              key={section.id}
              {...section}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

