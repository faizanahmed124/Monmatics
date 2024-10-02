// src/components/ResponsiveBoxes.jsx
import React from "react";

const Boxes = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-cente p-4">
      <div className="flex flex-col md:flex-row md:space-x-12 mb-10 space-y-8 md:space-y-0">
        {/* Box 1 */}
        <div className="bg-gray-300 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl h-[620px] lg:h-[700px] p-4  rounded-lg flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl   text-center">Access Anytime</h1>
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              Track your business on the move and have confidence in your
              figures no matter where you are
              <br />
              <br />
              <span className="text-orange-400">Monmatics Accounting app</span>
            </p>
          </div>
          <div className="flex items-center justify-center mt-0">
            <img
              src="https://monmatics.com/public/assets/images/WhatsApp%20Image%202023-07-06%20at%2010.41%201.svg"
              alt=""
              className="max-h-full object-contain"
            />
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-blue-800 text-white w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl h-[600px] md:h-[500px] lg:h-[700px]  rounded-lg flex flex-col items-center justify-between">
          <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl  mb-2  text-center">
              For accountants and bookkeepers
            </h1>
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl px-2">
              Track your business on the move and have confidence in your
              figures no matter where you are
              <br />
              <br />
              <p className="text-orange-500"> Monmatics Accounting app</p>
            </p>
          </div>
          <div className="flex items-center justify-center mb-3">
            <img
              src="https://monmatics.com/public/assets/images/Rectangle%2034.svg"
              alt=""
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
