import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Dropdown from "react-bootstrap/Dropdown";
import Features from "../Dropdownpages/Features";
import Plans from "../Dropdownpages/Plans";
import Accontants from "../Dropdownpages/Accountants";
import Apps from "../Dropdownpages/Apps";
import Support from "../Dropdownpages/Support";


const Navigation2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.innerWidth >= 1024) { // Check if viewport width is lg or larger
      const scrollTop = window.scrollY;

      if (scrollTop > 25) {
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          setIsNavbarVisible(false);
        } else {
          // Scrolling up
          setIsNavbarVisible(true);
        }
        setLastScrollTop(scrollTop);
      } else {
        // Show the navbar if scrolled to the top
        setIsNavbarVisible(true);
      }
    } else {
      // For md and sm screens, the navbar should always be visible
      setIsNavbarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
    <div
      ref={navbarRef}
      className={`h-auto w-full bg-white border transition-transform duration-300 ${window.innerWidth >= 1024 ? (isNavbarVisible ? 'translate-y-0' : '-translate-y-full') : 'translate-y-0'}`}
    >
      <div className="md:flex justify-between items-center p-2 md:px-9 mx-2">
        <div className="md:flex items-center md:px-10 md:gap-10 md:py-3 p-2">
          <Link to="/">
            <img src="https://monmatics.com/public/assets/images/Logo%20new%201.svg" alt="Monmatics Logo" className='md:w-40' />
          </Link>
          {/* Dropdowns for large screens */}
          <div className="hidden lg:flex items-center md:gap-4 md:text-[16px] pt-3">
            <Features />
            <Plans />
            <Accontants />
            <Apps />
            <Support />
          </div>

          {/* Try Monmatics button for small screens */}
        </div>

        {/* Try Monmatics button for large screens */}
        <Dropdown className="border border-blue-900 border-spacing-1 bg-blue-400 rounded-md hidden lg:flex">
          <Dropdown.Toggle variant=" " id="dropdown-basic">
            Try Monmatics
          </Dropdown.Toggle>

          <Dropdown.Menu className="text-xl w-52">
            <Dropdown.Item
              href="#/action-1"
              className="flex items-center px-2 gap-3"
            >
              <img
                src="https://monmatics.com/public/assets/images/Male%20User.svg"
                alt=""
              />
              Register
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              className="flex items-center px-2 gap-3"
            >
              <img
                src="https://monmatics.com/public/assets/images/Male%20User.svg"
                alt=""
              />
              Individual
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              className="flex items-center px-2 gap-3"
            >
              <img
                src="https://monmatics.com/public/assets/images/Business.svg"
                alt=""
              />
              Business
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Menu button for small screens at the top right */}
      <div className="absolute top-3 right-2 mt-2 mr-4 lg:hidden text-xl">
        <button onClick={handleMenuToggle}>
          {isMenuOpen ? (
            <ion-icon name="close-outline"></ion-icon>
          ) : (
            <ion-icon name="menu-outline"></ion-icon>
          )}
        </button>
      </div>

      {/* Collapsible navbar for small screens, opening from the left */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white w-full">
          <div className="flex flex-col items-start px-2 py-4 gap-2 font-sans">
            <Features />
            <Plans />
            <Accontants />
            <Apps />
            <Support />
            <button className="bg-orange-400 mt-2 px-3 py-1 rounded">
              Try Monmatics
            </button>
          </div>
        </div>
      )}
        
    </div>
  </>
  );
};

export default Navigation2;
