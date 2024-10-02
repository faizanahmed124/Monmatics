// src/components/TextImageDiv.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TextImage = () => {
  const text = `The CRM platform adored by millions
Monmatics integrates your sales, marketing, and support teams by letting the platform handle the work so they can focus on increasing productivity, growing your business, and engaging customers in critical moments.`;

  const imgSrc = 'https://monmatics.com/public/assets/images/Frame%2077.svg';

  const variants = {
    hidden: { opacity: 0, filter: 'blur(50px)' },
    visible: {
      opacity: 3,
      filter: 'blur(0px)',
      transition: { duration: 4 }
    }
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center  py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between max-w-5xl mx-auto p-6 bg-white rounded-lg border space-y-8 lg:space-y-0 lg:space-x-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="lg:w-1/2 p-4"
        >
          <h1 className="lg:text-3xl font-bold mb-6 text-blue-700">The CRM platform adored by millions</h1>
          <p className="text-lg">{text}</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="lg:w-1/2 p-4"
        >
          <img src={imgSrc} alt="Monmatics" className="w-full h-auto rounded-lg" />
        </motion.div>
      </div>
    </div>
  );
};

export default TextImage;
