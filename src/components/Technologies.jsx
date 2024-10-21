// src/components/Technologies.jsx
import React from 'react';
import { motion } from 'framer-motion';
const image1 = '/assets/image1.png'; // Updated path
const image2 = '/assets/image2.png'; // Updated path
const image3 = '/assets/image3.png'; // Updated path
const image4 = '/assets/image4.png'; // Updated path

const Technologies = () => {
  const images = [
    { src: image1, alt: 'Microsoft 365', url: 'https://www.microsoft.com/en-us/microsoft-365' },
    { src: image2, alt: 'Active Directory', url: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview' },
    { src: image3, alt: 'PowerShell', url: 'https://learn.microsoft.com/en-us/powershell/' },
    { src: image4, alt: 'VMware Environment', url: 'https://www.vmware.com/' },
  ];

  return (
    <motion.div
      id="technologies"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500">Technologies</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {images.map((image, index) => (
            <a href={image.url} target="_blank" rel="noopener noreferrer" key={index}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="shadow-md shadow-gray-600 rounded-lg h-full"
              >
                <img src={image.src} alt={image.alt} className="w-40 mx-auto rounded-md h-40 object-contain" />
                <p className="mt-4">{image.alt}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
