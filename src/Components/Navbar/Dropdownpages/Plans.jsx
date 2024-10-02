import React, { useState, useRef, useEffect } from 'react';

const images = [
  { src: 'https://monmatics.com/public/assets/images/Accept%20Payment-1.svg', name: 'Accept Payment' },
  { src: 'https://monmatics.com/public/assets/images/Claim%20expenses-1.svg', name: 'Claim Expenses' },
  { src: 'https://monmatics.com/public/assets/images/Bank%20connection.svg', name: 'Bank Connection' },
  { src: 'https://monmatics.com/public/assets/images/Bank%20connection.svg', name: 'Bank Connection' },
];

const Plans = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) { // Only open on hover for larger screens
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) { // Only close on hover for larger screens
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) { // Toggle on click for mobile/tablets
      setIsOpen((prev) => !prev);
    }
  };

  const handleScroll = () => {
    if (window.innerWidth >= 1024) { // Only close on scroll for larger screens
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) { // Attach scroll event only for large screens and above
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center hover:text-orange-500"
        onClick={handleClick} // Add click event for mobile/tablets
      >
        Plan for Small Business
        {isOpen ? (
          <ion-icon name="caret-up-outline"></ion-icon>
        ) : (
          <ion-icon name="caret-down-outline"></ion-icon>
        )}
      </button>

      {isOpen && (
        <div className="left-0 z-10 w-full bg-gray-200 md:h-auto md:w-full md:fixed">
          <div className='container pt-2 pb-3 right-10 bg-gray-200 w-full md:w-[900px]'>
          <div className="flex justify-center">
              <h1 className=" pb-1 text-2xl md:text-3xl text-center text-blue-500 underline my-2">
                Unleash Your Business Potential with Monmatics
              </h1>
            </div>
           
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 md:px-0 md:pt-2">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-orange-500">
                  <img src={image.src} alt={image.name} className="object-cover w-14" />
                  <p className="mt-2 duration-100 cursor-pointer hover:text-orange-600 hover:text-xl">{image.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
