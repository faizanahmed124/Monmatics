import React from "react";
import { motion } from "framer-motion";

const Smallcircles1 = () => {
  const Images = [
    {
      imgSrc: "https://monmatics.com/public/assets/images/CRM.svg",
      text: "CRM",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/POS.svg",
      text: "POS",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/Sales.svg",
      text: "Sales",
    },
  ];

  const Data = [
    {
      imgSrc: "https://monmatics.com/public/assets/images/Project.svg",
      text: "Project",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/Timesheet.svg",
      text: "Timesheet",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/HelpDesk.svg",
      text: "Helpdesk",
    },
  ];

  const Image = [
    {
      imgSrc: "https://monmatics.com/public/assets/images/Inventory.svg",
      text: "Inventory",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/MRP.svg",
      text: "MRP",
    },
    {
      imgSrc: "https://monmatics.com/public/assets/images/Purchase.svg",
      text: "Purchase",
    },
  ];

  // Animation variants for items coming from left or right
  const leftToRight = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.7, ease: "easeOut" } },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3, ease: "easeOut" } },
  };

  return (
    <>
      <div className="flex items-center justify-center lg:text-4xl m-10">
        <h1>Apps for your business need</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center justify-center">
        {/* Boost your sales section (left animation) */}
        <motion.div
          className="1 w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={leftToRight}
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Boost your sales</h1>
          </div>
          <div className="flex justify-center p-4 gap-10 lg:gap-6">
            {Images.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.text}
                  className="w-14 transition-transform duration-500 ease-in-out hover:rotate-12"
                />
                <p className="mt-2 hover:text-orange-500 transition duration-300 ease-in-out">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integrate your service section (no animation in the center) */}
        <div className="2 w-auto">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Integrate your service</h1>
          </div>
          <div className="flex justify-center p-4 gap-10 lg:gap-4">
            {Data.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.text}
                  className="w-14 transition-transform duration-500 ease-in-out hover:rotate-12"
                />
                <p className="mt-2 hover:text-orange-500 transition duration-300 ease-in-out">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Streamline your operations section (right animation) */}
        <motion.div
          className="3 w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={rightToLeft}
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Streamline your operations</h1>
          </div>
          <div className="flex justify-center p-4 gap-10 lg:gap-4">
            {Image.map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.imgSrc}
                  alt={item.text}
                  className="w-14 transition-transform duration-500 ease-in-out hover:rotate-12 scale-105"
                />
                <p className="mt-2 hover:text-orange-500 transition duration-300 ease-in-out">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Smallcircles1;
