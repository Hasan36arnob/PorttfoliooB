import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/publications", label: "Research" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-gray-900 shadow-lg shadow-orange-500/10 py-2"
          : "bg-gray-900/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
          Bushra M.D.
        </h1>

        {/* Hamburger menu for small screens */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links */}
        <ul
          className={`md:flex space-x-8 items-center transition-transform duration-300 md:static fixed top-16 right-0 
          bg-gray-900 md:bg-transparent p-4 md:p-0 w-full md:w-auto 
          ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
        >
          {navItems.map((item) => (
            <li key={item.path} className="my-2 md:my-0">
              <Link
                to={item.path}
                className="relative font-medium text-gray-300
                  hover:text-orange-500 transition-all duration-300
                  after:content-[''] after:absolute after:w-0 after:h-0.5 
                  after:bg-orange-500 after:left-0 after:-bottom-1 
                  after:transition-all after:duration-300
                  hover:after:w-full before:content-['']
                  before:absolute before:w-1 before:h-1
                  before:bg-orange-500 before:-left-2 before:top-1/2
                  before:-translate-y-1/2 before:opacity-0
                  hover:before:opacity-100 before:transition-opacity"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
