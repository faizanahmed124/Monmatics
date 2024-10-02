import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CirclesDivs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const data = [
    { imgSrc: 'https://monmatics.com/public/assets/images/Accept%20Payment.svg', text: 'EXPECT PAYMENT' },
    { imgSrc: 'https://monmatics.com/public/assets/images/Claim%20expenses.svg', text: 'CLAIM EXPENSES' },
    { imgSrc: 'https://monmatics.com/public/assets/images/Bank%20connections.svg', text: 'BANK CONNECTIONS' },
    { imgSrc: 'https://monmatics.com/public/assets/images/Pay%20bills.svg', text: 'PAY BILLS' },
    { imgSrc: 'https://monmatics.com/public/assets/images/Ellipse%207.svg', text: 'See all features' },
  ];

  const dropInAnimation = {
    hidden: { opacity: 0, y: -160 },
    visible: { opacity: 4, y: 0, transition: { duration: 1.6, ease: 'easeOut' } },
  };

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-72 flex flex-col items-center justify-center py-20 bg-blue-100 mt-2"
    >
      <div className="flex justify-center items-center mx-4 lg:mx-0 mb-5">
        <h1 className="text-4xl lg:text-4npxl">Feature for Elevating Your Business</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-42 h-42 rounded-full mx-auto py-2 hover:text-orange-500 hover:text-base"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'} // Only animate if visible
            variants={dropInAnimation}
            transition={{ delay: index * 0.2 }} // Stagger delay per item
          >
            <img
              src={item.imgSrc}
              alt={item.text}
              className="w-32 object-cover rounded-full transition-transform duration-500 ease-in-out hover:rotate-12"
            />
            <p className="mt-2 text-center hover:text-orange-500 transition duration-300 ease-in-out cursor-pointer">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CirclesDivs;
