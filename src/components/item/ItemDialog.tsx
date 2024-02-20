import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        if (isOpen) {
            const modalRoot = document.getElementById('modal-root');
            if (!modalRoot) {
                console.error('The modal root element #modal-root is not found in the document.');
                return;
            }

            modalRoot.appendChild(container);
            return () => {
                modalRoot.removeChild(container);
            };
        }
    }, [isOpen, container]); 

    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-5 relative">
                <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-lg font-bold">&times;</button>
                {children}
            </div>
        </div>,
        container
    );
};

export default Dialog;
