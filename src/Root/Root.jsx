import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import bgImage from '../assest/images/Rectangle 1.png';
import Home from '../Pages/Home';

const Root = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navbar */}
         <Home></Home>
      <Navbar />
   

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;