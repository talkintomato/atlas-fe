import React from 'react';

export interface SectionProps {
  label: string;
  description: string;
  items: {
    id: number;
    title: string;
    content: string;
    link?: string;
  }[];
}

const Section: React.FC<SectionProps> = ({ label, description, items }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{label}</h2>
      <p className="mb-6">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ id, title, content }) => (
          <div key={id} className="border border-gray-200 rounded-lg shadow-lg p-4 hover:bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section;
