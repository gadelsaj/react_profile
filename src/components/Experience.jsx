import React from 'react';
import { motion } from 'framer-motion';
const projectImg1 = '/assets/projects/project-1.jpg'; // Updated path
const projectImg2 = '/assets/projects/project-2.jpg'; // Updated path
const projectImg3 = '/assets/projects/project-3.jpg'; // Updated path
const projectImg4 = '/assets/projects/project-4.jpg'; // Updated path

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500">Experience</h2>
        </div>

        {/* Experience Item 1 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={projectImg1}
            alt="Experience 1"
            className="w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">System Administrator/Cloud Operations</h3>
            <a
              href="https://www.njtransit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-400 hover:underline"
            >
              NJ Transit
            </a>
            <p className="italic">Dec 2023 - Present</p>
            <p>
              Worked with cloud engineers to adopt secure AWS, Azure, and GCP systems. 
              Supported server hardware and software setup, and optimized Active Directory environments.
            </p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={projectImg2}
            alt="Experience 2"
            className="w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">Wireless System Analyst</h3>
            <a
              href="https://www.njtransit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-400 hover:underline"
            >
              NJ Transit
            </a>
            <p className="italic">June 2023 - Dec 2022</p>
            <p>
              Managed work cellular devices, configured MDM solutions, and handled work orders for employees' devices using AirWatch and FootPrints.
            </p>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={projectImg3}
            alt="Experience 3"
            className="w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">Desktop Support Technician</h3>
            <a
              href="https://www.kean.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-400 hover:underline"
            >
              Kean University
            </a>
            <p className="italic">Sep 2022 - Sep 2023</p>
            <p>
              Provided desktop support to students, faculty, and staff. Managed software and hardware installations, and resolved technical issues using FreshService.
            </p>
          </div>
        </div>

        {/* Experience Item 4 */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src={projectImg4}
            alt="Experience 4"
            className="w-32 h-32 md:w-48 md:h-48 rounded-md shadow-md mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">I.T. Team Leader</h3>
            <a
              href="https://havenonsip.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-blue-400 hover:underline"
            >
              St. George & St. Shenouda Coptic Church
            </a>
            <p className="italic">June 2017 - Present</p>
            <p>
              Leading the I.T. team, managing community projects, and coordinating technical aspects for church events and services.
            </p>
          </div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Experience;
