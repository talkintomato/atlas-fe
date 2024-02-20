import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ItemProps } from './ItemCard'; // Ensure this import matches the location of your ItemProps

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  item: ItemProps;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, item }) => {
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'));

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      console.error('The modal root element #modal-root is not found in the document.');
      return;
    }

    if (isOpen) {
      modalRoot.appendChild(container);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (modalRoot.contains(container)) {
        modalRoot.removeChild(container);
      }
      document.body.style.overflow = '';
    };
  }, [isOpen, container]);

  if (!isOpen) return null;

  const handleDialogClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg relative flex overflow-hidden" onClick={handleDialogClick} style={{ width: '90%', maxWidth: '1200px' }}>
        {/* Image Section */}
        <div className="flex-none w-full md:w-1/2 h-full">
          <img src={item.link} alt={item.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-2">{item.title}</h2>
          <p>{item.description}</p>
          {/* Modifer Items can be added here*/}

        </div>
      </div>
    </div>,
    container
  );
};

export default Dialog;
