// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const logo = '/assets/jovany_logo.png'; // Updated path to reflect the public folder

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full h-16 bg-black text-white flex justify-between items-center px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <img src={logo} alt="Your Logo" className="h-10" />
      </motion.div>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#experience" className="hover:text-gray-400">Experience</a>
        <a href="#ai" className="hover:text-gray-400">AI Component</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
