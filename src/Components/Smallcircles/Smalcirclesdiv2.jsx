import React from "react";
import { motion } from "framer-motion";
import Seeapps from "./Seeapps";

const Smallcirclesdiv2 = () => {
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

  // Animation variant for items coming from bottom to top
  const bottomToTop = {
    hidden: { opacity: 0, y: 160 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center">
        {/* Boost your sales section */}
        <motion.div
          className="1 w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bottomToTop}
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Boost your sales</h1>
          </div>
          <div className="flex justify-center p-4 gap-10 lg:gap-6">
            {Images.map((item, index) => (
              <div key={index} className="">
                <img src={item.imgSrc} alt={item.text} className="w-14" />
                <p className="px-3">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integrate your service section */}
        <motion.div
          className="2 w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bottomToTop}
        >
          <div className="flex items-center justify-center">
            <h1 className="text-2xl">Integrate your service</h1>
          </div>
          <div className="flex justify-center p-4 gap-10 lg:gap-4">
            {Data.map((item, index) => (
              <div key={index} className="">
                <img src={item.imgSrc} alt={item.text} className="w-14" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Seeapps component */}
      <div className="flex justify-center items-center">
        <Seeapps />
      </div>
    </>
  );
};

export default Smallcirclesdiv2;
