import { useState } from 'react';

const Menu = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="text-black font-bold text-2xl absolute top-4 right-4">
          ×
        </button>
        <ul className="text-black text-lg space-y-4">
          <li><a href="#home" className="hover:text-gray-700">Home</a></li>
          <li><a href="#about" className="hover:text-gray-700">About</a></li>
          <li><a href="#skills" className="hover:text-gray-700">Skills</a></li>
          <li><a href="#experience" className="hover:text-gray-700">Experience</a></li>
          <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
