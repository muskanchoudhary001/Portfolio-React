import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl ">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                   className="my-4"></motion.p>
                   <a href="https://www.linkedin.com/in/muskan-choudhary-789759175/" target="_blank" rel='noopener noreferrer' className="border-b">{CONTACT.linkedIn}</a>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }} className="my-4"> 
                    <a href="mailto:muskanchoudhary1303@gmail.com" className="border-b">{CONTACT.email}</a>
                </motion.p>
               
            </div>
        </div>
    )
}

export default Contact
