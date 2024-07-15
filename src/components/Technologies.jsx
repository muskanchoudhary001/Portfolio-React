import { motion } from 'framer-motion'
import { SiPostman } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

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
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Tools & Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          varients={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* <motion.div
          varients={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <TbBrandNextjs className="text-7xl  " />
        </motion.div> */}
        <motion.div
          varients={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiMongodb className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
          varients={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiPostman className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
          varients={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <PiFigmaLogoFill className="text-7xl text-pink-600" />
        </motion.div>
        <motion.div
          varients={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaGithub className="text-7xl text-white" />
        </motion.div>
        <motion.div
          varients={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <VscVscode className="text-7xl text-blue-700" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
