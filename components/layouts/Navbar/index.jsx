"use client";

import HamburgerButton from "@/components/elements/HamburgerButton";
import NAVBAR_ITEMS from "@/constants/navbar";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation"; // Import usePathname
import AppLogo from "@/components/elements/AppLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current pathname using usePathname

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if the current path is active
  const isActive = (pathnameToCompare) => {
    return pathname === pathnameToCompare
      ? "text-primary font-bold"
      : "text-gray-400"; // Compare current path
  };

  return (
    <nav className="w-full py-10 relative flex justify-between md:justify-center items-center px-4 md:px-0 z-[500]">
      <div className="md:hidden block">
        <AppLogo />
        
      </div>
      {/* Desktop Menu */}
      <div className="space-x-4 hidden md:flex items-center">
        {NAVBAR_ITEMS.map((item, i) => (
          <div key={i} className="relative group">
            {/* Main Menu Item */}
            <Link
              href={item.pathname ? item.pathname.trim() : "#"} // Default to "#" if no pathname for non-link items like "About"
              className={` ${isActive(
                item.pathname ? item.pathname.trim() : "#"
              )} hover:text-primary text-lg`}
            >
              {item.label.trim()}
              {/* Chevron for Dropdown */}
              {item.subMenu && <FaChevronDown className="ml-2 inline-block" />}
            </Link>

            {/* Submenu - Dropdown */}
            {item.subMenu && (
              <div className="absolute left-0 w-[300px] hidden group-hover:block bg-white shadow-lg rounded-lg p-2 z-[600]">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.pathname.trim()}
                    className="block px-4 py-2 text-lg text-gray-700 hover:bg-primary hover:text-white"
                  >
                    {subItem.label.trim()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />

      {/* Mobile Menu (Dropdown for Mobile View) */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
