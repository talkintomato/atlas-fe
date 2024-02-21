import React from 'react';
import ItemCard from './item/ItemCard';
import { MenuSection } from '../graphql/queries';

const Section: React.FC<MenuSection> = ({ id, label, description, items, isAvailable }) => {
  // Conditional class to grey out the section
  const childClass = isAvailable ? '' : 'opacity-50 pointer-events-none';

  return (
    <section id={id} className="mb-8 p-10">
      <h2 className={`text-2xl font-bold mb-4 ${childClass}`}>{label}</h2>
      <p className={`mb-6 ${childClass}`}>{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          // Apply the conditional class to each ItemCard as well
          <div className={childClass}>
            <ItemCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
