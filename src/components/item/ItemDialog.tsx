import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MenuItem } from '../../graphql/queries';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, item }) => {
  const { label, description, link, isAvailable } = item
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0)); // Prevents negative values
  // Edge case: If Section and Item is Unavailable - opcaity-50 applied twice, could be improved by passing down section availability as a prop as well
  const buttonClass = item.isAvailable ? "bg-secondary text-white px-4 py-2 hover:bg-secondaryHover w-full max-w-xs mx-auto"
    : "bg-secondary bg-opacity-50 text-white px-4 py-2 cursor-default w-full max-w-xs mx-auto";
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'));
  const addButtonAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents the event from propagating up to the div click handler
    if (isAvailable) {
      alert("Added!");
    }
  };

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
      <div className="bg-white lg relative flex overflow-hidden" onClick={handleDialogClick} style={{ width: '90%', maxWidth: '1200px' }}>
        {/* Image Section */}
        <div className="flex-none w-full md:w-1/2 h-full">
          <img src={link} alt={label} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 flex-1">
            <h2 className="text-xl font-bold mb-2">{label}</h2>
            <p className="mb-4">{description}</p>
          </div>
          {/* Improvement - Item Modifiers Section */}
          {/* Item Modifiers Section */}
          <div className="bg-gray-200 p-4 flex justify-center items-center">
            <div className="bg-white border-black border-2 flex items-center space-x-2">
              <button
                onClick={decrement}
                className="bg-white font-bold px-4 py-2 hover:bg-gray-400"
              >
                -
              </button>
              <span className="font-semibold">{count}</span>
              <button
                onClick={increment}
                className="font-bold px-4 py-2 hover:bg-gray-400"
              >
                +
              </button>
            </div>
            <button onClick={addButtonAction}
              className={buttonClass}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>,
    container
  );
};

export default Dialog;
