import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">My Restaurant</a>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#services" className="text-gray-600 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;