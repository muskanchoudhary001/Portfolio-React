import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_acndtlg', 'template_xn0odto', form.current, 'gUNgOVZxd7enQU3UI')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form fields
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="relative">
        <div className="absolute -left-44 -top-12 mb-8 hidden md:block">
          <img
            className="object-contain rounded-lg"
            alt="It works illustration"
            fetchpriority="high"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            srcSet="/_next/image?url=%2Freal.png&w=256&q=75 1x, /_next/image?url=%2Freal.png&w=640&q=75 2x"
            src="/_next/image?url=%2Freal.png&w=640&q=75"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-8">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full bg-[#1e2432] border-0 text-gray-300 placeholder:text-gray-500 p-3 rounded-md"
          />
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full bg-[#1e2432] border-0 text-gray-300 placeholder:text-gray-500 p-3 rounded-md"
          />
          <motion.textarea
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            name="message"
            placeholder="Your Message"
            className="w-full min-h-[200px] bg-[#1e2432] border-0 text-gray-300 placeholder:text-gray-500 p-3 rounded-md resize-none"
          />
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            type="submit"
            className="text-white px-8 py-3 rounded-3xl"
            style={{
              backgroundColor: '#1e2432',
              transition: 'transform 0.3s ease, background-color 0.3s ease',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.backgroundColor = '#3c7393';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#335d75';
            }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;