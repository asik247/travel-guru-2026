import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

  const links = (
    <>
      <li><NavLink to={'news'}>News</NavLink></li>
      <li><NavLink to={'destination'}>Destination</NavLink></li>
      <li><NavLink to={'blog'}>Blog</NavLink></li>
      <li><NavLink to={'contact'}>Contact</NavLink></li>
      <li><NavLink to={'login'}>Login</NavLink></li>
      <li><NavLink to={'login'}>SignUp</NavLink></li>
    
    </>
  );

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      
      <div className="navbar px-6 py-3 
      bg-white/10 backdrop-blur-md 
      text-white shadow-md">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-black/80 backdrop-blur rounded-box w-52">
              {links}
            </ul>
          </div>

          <h1 className="text-xl font-bold">Travel</h1>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {links}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-sm bg-white/20 text-white placeholder-white border-none focus:outline-none"
          />
        </div>

      </div>
    </div>
  );
};

export default Navbar;