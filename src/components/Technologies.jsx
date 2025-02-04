import { motion } from 'framer-motion';
import { SiPostman, SiMongodb, SiCplusplus } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiReactjsLine , RiTailwindCssFill} from 'react-icons/ri';
import { FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";

const iconVarients = duration => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <SiCplusplus className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl text-green-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <SiPostman className="text-5xl text-orange-400" />
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-5xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <PiFigmaLogoFill className="text-5xl text-pink-600" />
        </motion.div>
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <DiMysql className="text-5xl text-white-600" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <FaGithub className="text-5xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <VscVscode className="text-5xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-5xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <FaHtml5 className="text-5xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="flex justify-center items-center rounded-lg border border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-5xl text-blue-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies;
