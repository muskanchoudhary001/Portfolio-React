import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="py-10 px-4"
    >
      <div className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Muskan Choudhary. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;