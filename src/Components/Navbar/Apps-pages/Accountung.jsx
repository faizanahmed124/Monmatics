import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; 
import Image from "../../../assets/Images/Accounting1.jpg";
import Image2 from "../../../assets/Images/Image2.jpg";
import Image3 from "../../../assets/Images/Image3.jpg";
import Image4 from "../../../assets/Images/Image4.jpg";
import Home from "../../Homepage/Home";

const Accountung = () => {
  const [visibleSections, setVisibleSections] = useState({
    main: false,
    part2: false,
    part3: false,
    part5: false,
  });

  const sectionRefs = {
    main: useRef(null),
    part2: useRef(null),
    part3: useRef(null),
    part5: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.section]: true,
          }));
        }
      });
    }, { threshold: 0.1 });

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const transition = { duration: 0.8, ease: "easeInOut" };
  const leftVariants = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };
  const rightVariants = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } };

  return (
    <>
    <Home/>
      <div className="Banner">
        <section className="bg-gray-50">
          <motion.div
            className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            initial="hidden"
            animate={visibleSections.main ? "visible" : "hidden"}
            transition={transition}
            variants={rightVariants}
            ref={sectionRefs.main}
            data-section="main"
          >
            <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl" style={{ fontFamily: '"Nerko One", cursive' }}>
  "Say Goodbye to the Outdated"
  <strong className="font-extrabold text-orange-700 sm:block">
    Accounting Hassles
  </strong>
</h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Say goodbye to complicated software and mistakes. With MonMatics, your accounting becomes quicker, smarter, and perfectly suited to your business. Switch to a modern solution that lets you focus on growing your business, not on dealing with paperwork.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto" href="#">
                  Start Now, It's Free
                </a>
                <a className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto" href="#">
                  Schedule a Demo
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 bg-gray-200" ref={sectionRefs.main} data-section="main">
        <motion.div
          className="mt-10"
          initial="hidden"
          animate={visibleSections.main ? "visible" : "hidden"}
          transition={transition}
          variants={leftVariants}
        >
          <img src={Image} alt="" className="h-96" />
        </motion.div>
        <motion.div
          className="border p-5"
          initial="hidden"
          animate={visibleSections.main ? "visible" : "hidden"}
          transition={transition}
          variants={rightVariants}
        >
          <div className="flex justify-center items-center mb-10 md:mb-10">
            <h1 className="text-3xl md:text-5xl "  style={{ fontFamily: '"Nerko One", cursive' }}>
              Accounting <br />
              <strong className="text-orange-500">Dashboard:</strong>
            </h1>
          </div>
          <div className="flex justify-center items-center max-w-2xl gap-2 font-sans">
            With the MonMatics Accounts Dashboard, take control of your money! With our dashboard, you can monitor account balances and your income and expenses to help you achieve a live picture of your company’s financial conditions.
          </div>
        </motion.div>
      </div>

      {/* Part 2 */}
      <div className="part2" ref={sectionRefs.part2} data-section="part2">
        <motion.div
          className="flex justify-center md:justify-start md:p-5"
          initial="hidden"
          animate={visibleSections.part2 ? "visible" : "hidden"}
          transition={transition}
          variants={rightVariants}
        >
          <h1 className="text-2xl md:text-4xl"  style={{ fontFamily: '"Nerko One", cursive' }}>
            “STAY ORGANIZED AND ON <br /> BUDGET WITH{" "}
            <strong className="text-orange-500">Monmatics:</strong>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-12">
          <motion.div
            className="border p-5"
            initial="hidden"
            animate={visibleSections.part2 ? "visible" : "hidden"}
            transition={transition}
            variants={leftVariants}
          >
            <div className="flex justify-center items-center max-w-2xl gap-2 font-sans">
              Expense List is a feature of MonMatics that will help you effectively keep track of all your business expenses, since it allows you to record and classify your expenses easily.
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate={visibleSections.part2 ? "visible" : "hidden"}
            transition={transition}
            variants={rightVariants}
          >
            <img src={Image2} alt="" />
          </motion.div>
        </div>
      </div>

      {/* Part 3 */}
      <div className="3part mt-20" ref={sectionRefs.part3} data-section="part3">
        <motion.div
          className="flex justify-center md:justify-end items-center px-10"
          initial="hidden"
          animate={visibleSections.part3 ? "visible" : "hidden"}
          transition={transition}
          variants={rightVariants}
        >
          <h1 className="text-2xl md:text-4xl">
            “REAL-TIME INSIGHT FOR SMARTER <br /> BUDGET WITH{" "}
            <strong className="text-orange-500">FINANCIAL PLANNING:</strong>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
          <motion.div
            className=""
            initial="hidden"
            animate={visibleSections.part3 ? "visible" : "hidden"}
            transition={transition}
            variants={leftVariants}
          >
            <img src={Image3} alt="" className="h-96" />
          </motion.div>
          <motion.div
            className="border p-5"
            initial="hidden"
            animate={visibleSections.part3 ? "visible" : "hidden"}
            transition={transition}
            variants={rightVariants}
          >
            <div className="flex justify-center items-center max-w-2xl gap-2 font-sans">
              Do you want to avoid being surprised by low balances or having little cash on hand to meet your business’s needs? With MonMatics’ Cash Flow management, you can successfully stay on top of your business finances.
            </div>
          </motion.div>
        </div>
      </div>

      {/* Part 5 */}
      <div className="part5" ref={sectionRefs.part5} data-section="part5">
        <motion.div
          className="flex justify-center items-center px-10"
          initial="hidden"
          animate={visibleSections.part5 ? "visible" : "hidden"}
          transition={transition}
          variants={rightVariants}
        >
          <h1 className="text-2xl md:text-4xl">
            “MANAGE YOUR PAYMENTS EASILY WITH{" "}
            <strong className="text-orange-500">MONMATICS:</strong>
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-3 gap-12">
          <motion.div
            className="border p-5"
            initial="hidden"
            animate={visibleSections.part5 ? "visible" : "hidden"}
            transition={transition}
            variants={leftVariants}
          >
            <div className="flex justify-center items-center max-w-2xl gap-2 font-sans">
              All your vendor payments are manageable with MonMatics. Whenever important payments are due, whether it is for vendor or otherwise, you can track them.
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate={visibleSections.part5 ? "visible" : "hidden"}
            transition={transition}
            variants={rightVariants}
          >
            <img src={Image4} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Accountung;
