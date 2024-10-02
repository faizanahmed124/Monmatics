import React, { useState, useRef, useEffect } from 'react';

const images = [
  { src: 'https://monmatics.com/public/assets/images/Get%20Support.svg', name: 'Get Support' },
  { src: 'https://monmatics.com/public/assets/images/Guide.svg', name: 'Guide' },
  { src: 'https://monmatics.com/public/assets/images/Accounting%20glossary.svg', name: 'Accounting Glossary' },
];

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handler to open dropdown on hover (for large screens only)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  };

  // Handler to close dropdown on hover (for large screens only)
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  // Toggle dropdown on click (for mobile and tablet screens)
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen((prev) => !prev);
    }
  };

  // Close dropdown on scroll (for large screens only)
  const handleScroll = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 1024) {
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
        onClick={handleClick} // Add click event for mobile/tablet screens
      >
        Support
        {isOpen ? (
          <ion-icon name="caret-up-outline"></ion-icon>
        ) : (
          <ion-icon name="caret-down-outline"></ion-icon>
        )}
      </button>

      {isOpen && (
        <div className="left-0 z-10 w-full h-auto bg-gray-200 md:fixed">
          <div className="container mx-auto pb-3 right-10 w-full md:w-[800px]">
          <div className="flex justify-center">
              <h1 className=" pb-2 text-2xl md:text-3xl text-center text-blue-500 underline my-2">
                Unleash Your Business Potential with Monmatics
              </h1>
            </div>
      
            <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-32 lg:flex md:px-0 md:pt-2">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-orange-500"
                >
                  <img 
                    src={image.src} 
                    alt={image.name} 
                    className="object-cover w-16 " 
                  />
                  <p className="mt-2 text-center transition ease-in-out cursor-pointer d0 hover:text-orange-600 hover:text-xl">{image.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
