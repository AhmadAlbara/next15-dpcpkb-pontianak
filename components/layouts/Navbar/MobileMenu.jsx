import Link from "next/link";
import NAVBAR_ITEMS from "@/constants/navbar";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileMenu = ({ isOpen, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(null);
  const menuRef = useRef(null); // Refrensi untuk menu

  const mainItems = NAVBAR_ITEMS.filter((item) => !item.subMenu);
  const dropdownItems = NAVBAR_ITEMS.filter((item) => item.subMenu);

  const handleDropdownToggle = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg block md:hidden z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex flex-col space-y-4 p-6">
        {/* MAIN LINKS */}
        {mainItems.map((item, i) => (
          <Link
            href={item.pathname.trim()}
            key={i}
            className="text-white uppercase text-sm"
            onClick={onClose}
          >
            {item.label.trim()}
          </Link>
        ))}

        {/* DROPDOWN LINKS */}
        {dropdownItems.map((item, i) => (
          <div key={i} className="relative">
            <button
              onClick={() => handleDropdownToggle(i)}
              className="flex items-center text-white uppercase text-sm w-full justify-between"
            >
              {item.label.trim()}
              <FaChevronDown
                className={`ml-2 transform transition-transform ${
                  showDropdown === i ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {showDropdown === i && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                {item.subMenu.map((subItem, subIndex) => (
                  <Link
                    href={subItem.pathname.trim()}
                    key={subIndex}
                    className="text-white uppercase text-xs"
                    onClick={onClose}
                  >
                    {subItem.label.trim()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
