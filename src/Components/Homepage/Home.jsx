import React from 'react';

import TryMonmatics from '../TryMonmaticsbtn/TryMonmatics';

import { motion } from 'framer-motion';  // Import framer-motion

const Home = () => {
    const leftToRight = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    const rightToLeft = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <>
            <div
                className="w-full h-full lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://www.monmatics.com/public/assets/images/bg123.png')" }}
            >
                <div className="">
                    <div className=' md:flex md:px-10'>
                        {/* Left Content */}
                        <motion.div
                            className='px-12 pt-3 md:mt-10 lg:mt-20'
                            initial="hidden"
                            whileInView="visible"
                            variants={leftToRight}
                            viewport={{ once: true, amount: 0.5 }}  // Trigger animation once when 50% of the section is in view
                        >
                            <h1 className='text-2xl font-bold text-transparent md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-white to-violet-200'>
                                Accounting software to help you keep track of your finances
                            </h1>
                            <p className='pt-3 text-xs text-white sm:text-base md:pt-5'>
                                The only platform you'll ever need to run your business: <br /> 
                                integrated apps, kept simple, and adored by users.
                            </p>
                            <div className='hidden mt-4 md:flex'>
                                <TryMonmatics />
                            </div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            className='mx-10 mt-16 md:max-w-full sm:mx-w-20 md:mx-2'
                            initial="hidden"
                            whileInView="visible"
                            variants={rightToLeft}
                            viewport={{ once: true, amount: 0.5 }}  // Trigger animation once when 50% of the section is in view
                        >
                            <div className='flex justify-center items-center md:max-w-full mt-7 lg:w-[600px] sm:mx-w-20 mx-auto'>
                                <img
                                    src="https://monmatics.com/public/assets/images/Main%20screen%20video%201.svg"
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div>
                {/* Additional sections */}
            </div>

        </>
    );
};

export default Home;
