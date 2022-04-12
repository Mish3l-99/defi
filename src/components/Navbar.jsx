import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [MobNav, setMobNav] = useState(false);
  const handleNav = () => setMobNav(!MobNav);
  return (
    <div id="navbar" className="w-full fixed bg-black/80 md:bg-black/50">
      <div className="nav-container">
        <div className="">
          <h1 className="logo">DeFi.</h1>
        </div>
        <div className="flex justify-between items-center ">
          <ul className="hidden md:flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#footer">Platform</a>
            </li>
            <li>
              <a href="#developers">Developers</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center px-2">
          <button className="btn mr-3">Use Defi</button>
        </div>

        {/* Hamburger&cross */}
        <div
          className="md:hidden text-white flex items-center"
          onClick={handleNav}
        >
          {MobNav ? <FiX className="w-5" /> : <FiMenu className="w-5" />}
        </div>
      </div>

      {/* MobNav */}
      <div className={MobNav ? "mobnav duration-1000" : "mobnav ml-[-100%]"}>
        <ul>
          <li onClick={handleNav}>
            <a href="#home">Home</a>
          </li>
          <li onClick={handleNav}>
            <a href="#footer">Platform</a>
          </li>
          <li onClick={handleNav}>
            <a href="#developers">Developers</a>
          </li>
          <li onClick={handleNav}>
            <a href="#community">Community</a>
          </li>
          <li onClick={handleNav}>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="flex flex-col">
          <button className="btn">Use DeFi</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
