import { HERO_CONTENT } from "../constants";
const profilePic = "/assets/jovany_profile.png"; // Updated path
const logo = "/assets/jovany_logo.png"; // Updated path
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jovany Gadelsaid
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Cloud Operations & System Administrator
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am an enthusiastic IT professional with a passion for cloud infrastructure and system administration. With hands-on experience in AWS, Azure, and GCP, I specialize in building secure, scalable systems that support business needs. I’m always looking for ways to optimize and streamline processes to improve efficiency.
            </motion.p>
            {/* Add your logo here */}
            <motion.img
              src={logo} // Your logo file
              alt="Jovany Gadelsaid Logo"
              className="w-64 mt-12" // Adjust size and margin as needed
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 1 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} // Updated path
              alt="Jovany Gadelsaid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
