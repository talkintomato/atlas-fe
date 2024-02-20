import React from 'react';
import ItemCard, { ItemProps } from './item/ItemCard';


export interface SectionProps {
  label: string;
  id: string;
  description: string;
  items: ItemProps[];
}

const Section: React.FC<SectionProps> = ({ id, label, description, items }) => {
  return (
    <section id={id} className="mb-8 p-10">
      <h2 className="text-2xl font-bold mb-4">{label}</h2>
      <p className="mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Section;
