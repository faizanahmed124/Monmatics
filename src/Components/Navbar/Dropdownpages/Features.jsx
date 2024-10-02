import React, { useState, useRef, useEffect } from 'react';

const features = [
  { src: "https://monmatics.com/public/assets/images/Accept%20Payment-1.svg", text: "Accept Payment" },
  { src: "https://monmatics.com/public/assets/images/Claim%20expenses-1.svg", text: "Claim Expenses" },
  { src: "https://monmatics.com/public/assets/images/Bank%20connection.svg", text: "Bank Connection" },
  { src: "https://monmatics.com/public/assets/images/Inventory-1.svg", text: "Inventory" },
  { src: "https://monmatics.com/public/assets/images/Track%20Projects.svg", text: "Track Projects" },
  { src: "https://monmatics.com/public/assets/images/Online%20invoicing.svg", text: "Bank Reconciliation" },
  { src: "https://monmatics.com/public/assets/images/Multi%20currency.svg", text: "Manage Contacts" },
  { src: "https://monmatics.com/public/assets/images/Capture%20data.svg", text: "Capture Data" },
  { src: "https://monmatics.com/public/assets/images/Reporting.svg", text: "Reporting" },
  { src: "https://monmatics.com/public/assets/images/Online%20invoicing.svg", text: "Online Invoicing" },
  { src: "https://monmatics.com/public/assets/images/Multi%20currency.svg", text: "Multi Currency" },
  { src: "https://monmatics.com/public/assets/images/Purchase%20orders.svg", text: "Purchase Orders" },
  { src: "https://monmatics.com/public/assets/images/Analytics.svg", text: "Analytics" },
  { src: "https://monmatics.com/public/assets/images/Sales%20tax.svg", text: "Sales Tax" },
  { src: "https://monmatics.com/public/assets/images/Accounting%20(1).svg", text: "Accounting" },
  { src: "https://monmatics.com/public/assets/images/Manage%20fixed%20assets.svg", text: "Manage Fixed Assets" },
];

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen((prev) => !prev);
    }
  };

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
        onClick={handleClick}
      >
        Features
        {isOpen ? (
          <ion-icon name="caret-up-outline"></ion-icon>
        ) : (
          <ion-icon name="caret-down-outline"></ion-icon>
        )}
      </button>

      {isOpen && (
        <div className="left-0 z-50 items-center justify-center w-full bg-gray-200 md:h-auto md:fixed">
          <div className=''>
          <div className="flex justify-center">
              <h1 className=" pb-2 text-2xl md:text-3xl text-center text-blue-500 underline my-2">
                Unleash Your Business Potential with Monmatics
              </h1>
            </div>
            
            <div className="w-full px-5 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-2 space-x-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-orange-500">
                    <img src={feature.src} alt={feature.text} className="object-cover w-12 h-10 transition-transform duration-300 ease-in-out" />
                    <span className="text-sm font-medium duration-100 cursor-pointer sm:text-base hover:text-orange-600">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
