import { EXPERIENCES } from "../constants/";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl md:text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES?.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col gap-4 lg:flex-row lg:justify-center"
          >
            {/* Left Column for Year */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 text-center lg:text-left"
            >
              <p className="text-sm text-gray-400">{experience.year}</p>
            </motion.div>

            {/* Right Column for Role, Company, and Description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-gray-400 text-center lg:text-left">
                {experience?.role} -{" "}
                <span className="text-sm text-gray-400">
                  {experience?.company}
                </span>
              </h6>
              <p className="text-neutral-300 text-center lg:text-left">
                {experience?.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
