
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center text-white relative z-10 pt-40">
        <h1 className="text-5xl font-bold mb-4">nah</h1>
        <p className="text-xl mb-6">somestuff</p>
        <a href="#reserve" className="bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700">Reserve a Table</a>
      </div>
    </section>
  );
};

export default Hero;