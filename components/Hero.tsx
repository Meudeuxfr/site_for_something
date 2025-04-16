import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative bg-[url('/hero-bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
    <div className="bg-black/60 absolute inset-0 z-0"></div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="relative z-10 text-center text-white px-4"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-sans">Welcome to Our Restaurant</h1>
      <p className="text-lg md:text-2xl mb-6 font-light">Reserve your table with ease</p>
      <a href="#reserve" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-6 py-3 rounded-full text-white transition shadow-lg">
        Book Now
      </a>
    </motion.div>
  </section>
);

export default Hero;