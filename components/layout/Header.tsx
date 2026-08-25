"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";


const RelativeLinks = [
  {
    name: "Home",
    link: "/",
    sublink: [],
  },
  {
    name: "Services",
    link: "/services",
    sublink: [
      { name: "Office Space Planning", link: "/services/office-space-planning" },
      { name: "MEP Services", link: "/services/mep-services" },
      { name: "DG Supply & Services", link: "/services/dg-supply-and-services" },
      { name: "3D Project Modeling", link: "/services/3d-project-modeling" },
      { name: "Project Planning", link: "/services/project-planning" },
      { name: "Facility Management", link: "/services/facility-management" },
      { name: "Human Outsourcing", link: "/services/human-outsourcing" },
      { name: "General Order Supplier", link: "/services/general-order-supplier" },
    ],
  },
  {
    name: "Projects",
    link: "/projects",
    sublink: [],
  },
  {
    name: "Profile",
    link: "/profile",
    sublink: [],
  },
  {
    name: "About",
    link: "/about",
    sublink: [],
  },
  {
    name: "Clients",
    link: "/clients",
    sublink: [],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    sublink: [],
  },
];

const ExternalLinks = [
    {
        icon: FaFacebook,
        link:""
    },
    {
        icon: FaLinkedinIn,
        link:""
    },
    {
        icon: FaInstagram,
        link:""
    },
    {
        icon: FaPinterestP,
        link:""
    },
]

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
        {/* TODO: max-width */}
      {/* Announcement Bar */}
      <div className="bg-white text-black text-center py-2 font-bold text-base sm:text-lg xl:text-xl px-2">
        Samar Engineering Services (SES)
      </div>

      {/* Header */}
      <header className="bg-[#BDBDBD] px-4 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-bg.png"
            alt="Samar Engineering Services (SES)"
            height={100}
            width={200}
            className="h-12 w-auto sm:h-16 lg:h-[100px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {RelativeLinks.map((item) => {
              const isActive =
                item.link === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.link);

              return (
                <li key={item.name} className="relative group">
                  {/* Main Link */}
                  <Link
                    href={item.link}
                    className={`relative py-4 hover:text-white flex items-center gap-1 text-lg font-medium text-[#033268] transition-all ${isActive && 'text-white'}  duration-200 ${
                      isActive
                        ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white "
                        : ""
                    }`}
                  >
                    {item.name}
                    {item.sublink.length > 0 && (
                      <FaChevronDown className="transition-transform duration-200 group-hover:rotate-180" size={12} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.sublink.length > 0 && (
                    <div className="absolute left-0 top-full z-50 hidden w-64 -translate-x-1/2 pt-4 group-hover:block">
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-md bg-[#BDBDBD] p-3 shadow-lg"
                      >
                        {item.sublink.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className="block rounded px-4 py-2 text-[#033268] transition-colors hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* External Links */}
        <ul className="hidden lg:flex gap-4">
            {/* {ExternalLinks.map((item, index)=>(
                <li key={index}>
                    <Link href={item.link}><item.icon size={20}/></Link>
                </li>
            ))} */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center p-2 text-[#033268]"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#BDBDBD] px-4 pb-4 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto"
          >
            <ul className="flex flex-col divide-y divide-black/10">
              {RelativeLinks.map((item, idx) => {
                const isActive =
                  item.link === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.link);

                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="py-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.link}
                        onClick={() => setMenuOpen(false)}
                        className={`block py-2 text-lg font-medium text-[#033268] transition-all ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.sublink.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                          className="p-2 text-[#033268]"
                        >
                          <FaChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${mobileDropdown === item.name ? "rotate-180" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {item.sublink.length > 0 && mobileDropdown === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 pb-2 overflow-hidden"
                        >
                          {item.sublink.map((subItem, subIdx) => (
                            <motion.li
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIdx * 0.04 }}
                            >
                              <Link
                                href={subItem.link}
                                onClick={() => setMenuOpen(false)}
                                className="block rounded px-3 py-1.5 text-sm text-[#033268] transition-colors hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>

            {/* External Links */}
            {/* <ul className="mt-4 flex gap-5">
              {ExternalLinks.map((item, index) => (
                <li key={index} onClick={() => setMenuOpen(false)}>
                  <Link href={item.link}>
                    <item.icon size={22} />
                  </Link>
                </li>
              ))}
            </ul> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
