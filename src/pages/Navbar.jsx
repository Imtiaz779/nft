import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import img from "../assets/logo.png";

const navItems = ["Home", "Ecosystem", "Token", "Services"];
const dropdownItems = [
  { name: "Node", link: "#" },
  { name: "Fitness App", link: "#" },
  { name: "NFT Marketplace", link: "#" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-700 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={img} className="w-24 h-16" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-6 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="py-2 px-3 rounded-sm hover:text-blue-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="relative">
              <button
                onClick={() =>
                  setIsDesktopDropdownOpen((prev) => !prev)
                }
                className="flex items-center gap-2  px-3 hover:text-blue-400 transition"
              >
                Products
                <svg
                  className="w-2.5 h-2.5"
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isDesktopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-44 bg-gray-800 divide-y divide-gray-700 rounded-lg shadow-sm"
                  >
                    <ul className="py-2 text-sm text-gray-300">
                      {dropdownItems.slice(0, 2).map(({ name, link }) => (
                        <li key={name}>
                          <a
                            href={link}
                            className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="py-1">
                      <a
                        href={dropdownItems[2].link}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {dropdownItems[2].name}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a
                href="#"
                className="py-2 px-3 rounded-sm hover:text-blue-400 transition"
              >
                Get $NWS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 rounded-sm hover:text-blue-400 transition"
              >
                NwsSwap
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:block">
          <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen((prev) => !prev)}>
            {isMobileOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.ul
            key="mobileMenu"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col p-4 font-medium border border-gray-800 rounded-lg bg-gray-800 z-50"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 rounded-sm text-white hover:bg-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={() =>
                  setIsMobileDropdownOpen((prev) => !prev)
                }
                className="flex items-center gap-2 w-full py-2 px-3 rounded-sm text-white hover:bg-gray-700"
              >
                Products
                <svg
                  className="w-2.5 h-2.5 ml-1"
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 w-full bg-gray-800 divide-y divide-gray-700 rounded-lg"
                  >
                    <ul className="py-2 text-sm text-gray-300">
                      {dropdownItems.slice(0, 2).map(({ name, link }) => (
                        <li key={name}>
                          <a
                            href={link}
                            className="block px-4 py-2 hover:bg-gray-700 hover:text-white"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="py-1">
                      <a
                        href={dropdownItems[2].link}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {dropdownItems[2].name}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700"
              >
                Get $NWS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700"
              >
                NwsSwap
              </a>
            </li>

            <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
              Connect Wallet
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
