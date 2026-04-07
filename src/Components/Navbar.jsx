import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '/logo.png';

const Navbar = () => {

  const links = (
    <>
      <li><NavLink to={'/news'}>News</NavLink></li>
      <li><NavLink to={'/destination'}>Destination</NavLink></li>
      <li><NavLink to={'/blog'}>Blog</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
      <li><NavLink to={'/login'}>Login</NavLink></li>
      <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50">

      <div className="
        navbar px-6 py-3
        bg-transparent
        text-white
        backdrop-blur-lg
        border-b border-white/10
      ">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost text-white text-2xl">
              ☰
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow-lg bg-black/70 backdrop-blur-lg rounded-box w-52">
              {links}
            </ul>
          </div>

          <img className='w-[180px]' src={logoImg} alt="logo" />
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 font-medium text-[16px]">

            {links}

          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end hidden lg:flex gap-3">
          <input
            type="text"
            placeholder="Search"
            className="
              input input-sm
              bg-white/10
              text-white
              placeholder-white/70
              border border-white/20
              focus:outline-none
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Navbar;