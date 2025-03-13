import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto">
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
            >
                Fermer
            </button>
            {children}
            </div>
        </div>
    );
};  

export default Modal;