import React, { useState,useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDashboard  } from "react-icons/ai";
import { BsPinAngle } from "react-icons/bs";
import { GoFileMedia } from "react-icons/go";
import { SiPowerpages } from "react-icons/si";
import { LiaCommentSolid } from "react-icons/lia";

const Sidebar = () => {
  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (content) => {
    setActiveContent(content);
    setIsOpen(false); // Close sidebar after clicking item (optional)
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-gray-500 md:hidden"
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-40 bg-[#1D2327] text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:translate-x-0 md:relative md:h-screen md:block`}
      >
        {/* Close Icon (X) */}
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        )}

        {/* Sidebar Items */}
        <ul className="p-4">
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Dashboard')}
              className="flex items-center text-white"
            >
              <AiOutlineDashboard  className="mr-2" /> {/* Dashboard Icon */}
              Dashboard
            </button>
          </li>
         
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Posts')}
              className="flex items-center text-white"
            >
                <BsPinAngle   className="mr-2" />
              Posts
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Pages')}
              className="flex items-center text-white"
            >
                <SiPowerpages  className="mr-2" />
              Pages
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
         
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Comments')}
              className="flex items-center text-white"
            >
                <LiaCommentSolid  className="mr-2" />
              Comments
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          <li className="mb-4">
            <button
              onClick={() => handleItemClick('Media')}
              className="flex items-center text-white"
            >
                <GoFileMedia className="mr-2" />
              Media
            </button>
          </li>
          {/* You can add more items here if needed */}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-1 md:relative md:w-auto">
        <div className={`md:absolute p-4 md:top-0 md:left-1 md:w-[calc(100%-256px)]`}>
          {/* Content Section */}
          <h1 className="text-lg font-bold">Active Content: {activeContent}</h1>
          {activeContent === 'Dashboard' && <h1>Hello Muskan</h1>}
          {activeContent === 'Posts' && <h1>Hello Post</h1>}
          {activeContent === 'Media' && <h1>Add your media</h1>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
