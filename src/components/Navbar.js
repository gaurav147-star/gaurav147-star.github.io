import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/project" },
  { label: "Experience", path: "/experience" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md shadow-glow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Gaurav &nbsp;
              <span className="sm:block hidden"> | AI Engineer</span>
            </p>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-neon-blue border-b-2 border-neon-blue scale-105"
                        : "text-secondary hover:text-white"
                    } px-3 py-2 text-sm font-medium transition-all duration-300`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNav(!nav)}
              className="text-white hover:text-neon-blue focus:outline-none"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: nav ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-black-100/95 backdrop-blur-xl absolute w-full left-0 top-20 shadow-glass"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setNav(false)}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-neon-blue font-bold tracking-widest"
                    : "text-gray-300 hover:text-white"
                } block px-3 py-4 text-base font-medium transition-colors duration-300`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}