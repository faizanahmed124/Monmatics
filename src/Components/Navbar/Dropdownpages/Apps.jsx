import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Apps = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Open on hover for larger screens
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(true);
    }
  };

  // Close on hover for larger screens
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  // Toggle on click for mobile/tablets
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen((prev) => !prev);
    }
  };

  // Close on scroll for larger screens
  const handleScroll = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  // Close dropdown when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
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
      onClick={handleClick} // Toggle dropdown on click for smaller screens
    >
      <button className="flex items-center hover:text-orange-500">
        Apps
        {isOpen ? (
          <ion-icon name="caret-up-outline"></ion-icon>
        ) : (
          <ion-icon name="caret-down-outline"></ion-icon>
        )}
      </button>
      {isOpen && (
        <div className="fixed z-10 w-screen md:h-auto md:w-full md:fixed lg:left-0">
          <div className="grid grid-cols-1 gap-6 px-10 bg-gray-100 lg:grid-cols-4 md:grid-cols-2 lg:gap-1">
            {/* Finance */}
            <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
              <div className="flex items-center gap-2">
                <img
                  src="https://monmatics.com/public/assets/images/Finance.svg"
                  alt="Finance Icon"
                  className="w-6 h-6"
                />
                <span className="text-2xl">Finance</span>
              </div>
              <ul className="px-4 text-base">
                <Link to="/accounting" onClick={handleLinkClick}>
                  <li className='hover:text-orange-600'> Accounting</li>
                </Link>
                <Link to="/invoices" onClick={handleLinkClick}>
                  <li className='hover:text-orange-600'>Invoices</li>
                </Link>
                <li>Expenses</li>
                <li>Spreadsheet</li>
                <li>Documents</li>
                <li>Sign</li>
              </ul>
            </div>

            {/* Sales */}
            <div className="items-center justify-center h-52">
              <div className="w-auto h-auto p-4 mx-2 transition-transform duration-300 ease-in-out bg-gray-200 lg:my-2 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Total%20Sales.svg"
                    alt="Sales Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Sales</span>
                </div>
                <ul className="px-4 text-base">
                  <li>CRM</li>
                  <li>Sales</li>
                  <li>Point of Sale</li>
                  <li>Subscriptions</li>
                  <li>Rental</li>
                  <li>Amazon Connector</li>
                </ul>
              </div>
            </div>

            {/* Inventory and MRP */}
            <div className="items-center justify-center h-52">
              <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Warehouse.svg"
                    alt="Inventory Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Inventory and MRP</span>
                </div>
                <ul className="px-4 text-base">
                  <li>Inventory</li>
                  <li>Manufacturing</li>
                  <li>PLM</li>
                  <li>Purchase</li>
                  <li>Maintenance</li>
                  <li>Quality</li>
                </ul>
              </div>
            </div>

            {/* Human Resource */}
            <div className="items-center justify-center h-52">
              <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Human%20Research%20Program.svg"
                    alt="HR Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Human Resource</span>
                </div>
                <ul className="px-4 text-base">
                  <li>Employees</li>
                  <li>Recruitment</li>
                  <li>Time Off</li>
                  <li>Appraisals</li>
                  <li>Referrals</li>
                  <li>Fleet</li>
                </ul>
              </div>
            </div>

            {/* Marketing */}
            {/* <div className="items-center justify-center h-52">
              <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Marketing.svg"
                    alt="Marketing Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Marketing</span>
                </div>
                <ul className="px-4 text-base">
                  <li>Social Marketing</li>
                  <li>Email Marketing</li>
                  <li>SMS Marketing</li>
                  <li>Events</li>
                  <li>Marketing Automation</li>
                  <li>Surveys</li>
                </ul>
              </div>
            </div> */}

            {/* Services */}
            {/* <div className="items-center justify-center h-52">
              <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Services.svg"
                    alt="Services Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Services</span>
                </div>
                <ul className="px-4 text-base">
                  <li>Project</li>
                  <li>Time Shield</li>
                  <li>Field Service</li>
                  <li>Helpdesk</li>
                  <li>Planning</li>
                  <li>Appointments</li>
                </ul>
              </div>
            </div> */}

            {/* Productivity */}
            <div className="items-center justify-center h-auto mx-2 my-4">
              <div className="w-auto h-auto p-4 mx-2 my-2 transition-transform duration-300 ease-in-out bg-gray-200 rounded-2xl hover:scale-105">
                <div className="flex items-center gap-2">
                  <img
                    src="https://monmatics.com/public/assets/images/Brainstorm%20Skill.svg"
                    alt="Productivity Icon"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl">Productivity</span>
                </div>
                <ul className="px-4 text-base">
                  <li>Discuss</li>
                  <li>Approvals</li>
                  <li>IoT</li>
                  <li>VoIP</li>
                  <li>Knowledge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
