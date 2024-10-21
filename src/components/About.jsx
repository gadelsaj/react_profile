// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
const profileImg = '/assets/jovany_profile.jpg'; // Updated path to reference the public folder

const About = () => {
  return (
    <motion.div 
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500">About Me</h2>
        </div>
        <motion.img
          src={profileImg}
          alt="Jovany Gadelsaid"
          className="rounded-full w-48 h-48 mb-4 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-xl mt-8">
          Hi, I’m <strong>Jovany Gadelsaid</strong>, currently pursuing a B.S. in Information Technology at Kean University. I have experience working with cloud operations, system administration, and software development.
        </p>
        <br />
        <p className="text-xl">
          I am passionate about IT and enjoy working on projects that involve cloud systems like AWS, Azure, and GCP. I also have hands-on experience in managing Active Directory and Microsoft 365 environments. Outside of work, I volunteer as an I.T. Team Leader and am actively involved in community service.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
