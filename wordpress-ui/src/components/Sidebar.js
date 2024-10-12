import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDashboard } from "react-icons/ai";
import { BsPinAngle } from "react-icons/bs";
import { Link } from 'react-router-dom'; // Import Link

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`md:flex`}>
      {/* Hamburger Button */}
      <button onClick={toggleSidebar} className="p-4 text-gray-500 md:hidden fixed top-0 left-0 z-50">
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-40 bg-[#1D2327] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:relative`}>
        {/* Close Icon (X) - Only for mobile */}
        {isOpen && (
          <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white focus:outline-none md:hidden">
            <FaTimes size={24} />
          </button>
        )}

        {/* Sidebar Items */}
        <ul className="p-4 pt-12 md:pt-4"> {/* Padding adjusted for mobile */}
          <li className="mb-4">
            <Link to="/" className="flex items-center text-white">
              <AiOutlineDashboard className="mr-2" /> {/* Dashboard Icon */}
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/posts" className="flex items-center text-white" onClick={toggleSidebar}>
              <BsPinAngle className="mr-2" />
              Posts
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/calendar" className="flex items-center text-white" onClick={toggleSidebar}>
              <BsPinAngle className="mr-2" />
              Calendar
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default Sidebar;
