import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/2.jpg";
import { FaGithub, FaLinkedin,FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-12  text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.img
            src={profilePic}
            alt="Profile Picture"
            className="w-48 h-48 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="space-y-2">
            <motion.h4 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I'm Muskan Choudhary 👋
            </motion.h4>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;