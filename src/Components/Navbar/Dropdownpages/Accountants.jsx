import React, { useState, useRef, useEffect } from 'react';

const images = [
  { src: 'https://monmatics.com/public/assets/images/Monmatics%20HQ.svg', name: 'Accept Payment' },
  { src: 'https://monmatics.com/public/assets/images/Monmatics%20Cashback.svg', name: 'Claim Expenses' },
  { src: 'https://monmatics.com/public/assets/images/Practice%20manager.svg', name: 'Bank Connection' },
  { src: 'https://monmatics.com/public/assets/images/Workpapers.svg', name: 'Bank Connection' },
];

const Accontants = () => {
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
        For Accountants and Book Keepers
        {isOpen ? (
          <ion-icon name="caret-up-outline"></ion-icon>
        ) : (
          <ion-icon name="caret-down-outline"></ion-icon>
        )}
      </button>

      {isOpen && (
        <div className="left-0 z-10 bg-gray-200 md:h-auto md:w-full md:fixed">
          <div className="container mx-auto pt-1 pb-3 w-full md:w-[800px]">
          <div className="flex justify-center">
              <h1 className=" pb-2 text-2xl md:text-3xl text-center text-blue-500 underline my-2">
                Unleash Your Business Potential with Monmatics
              </h1>
            </div>
          
            <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-0 md:pt-2">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-orange-500">
                  <img src={image.src} alt={image.name} className="object-cover w-16" />
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

export default Accontants;
