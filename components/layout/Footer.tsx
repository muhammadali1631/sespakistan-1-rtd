"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";


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

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: FaTiktok,
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon:FaPinterestP,
  },
];

const phoneNumbers = [ "+92 312 5189414", "+92 333 5003314"];

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0d2a4a] px-6 pb-8 pt-5 text-white sm:px-10 lg:px-16">
      {/* Top nav */}
      <StaggerContainer staggerDelay={0.05} className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 sm:gap-x-8 gap-y-2 border-b border-white/10 pb-4 text-sm font-semibold">
        {RelativeLinks.map((link) => (
          <StaggerItem key={link.name}>
            <Link
              href={link.link}
              className="underline decoration-1 underline-offset-4 transition hover:text-sky-300"
            >
              {link.name}
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-8 pt-6 text-center sm:grid-cols-3 sm:text-left">
        {/* Tagline */}
        <FadeIn direction="up" className="flex flex-col items-center justify-center gap-1 sm:items-start">
          <p className="text-sm font-medium text-slate-200">
            Ready to Start Your Project?
          </p>
          <p className="text-sm font-bold leading-snug text-white">
            We turn ideas into designs you can see, feel, and trust.
          </p>
        </FadeIn>

        {/* Brand + socials */}
        <FadeIn direction="up" delay={0.1} className="flex flex-col items-center gap-3">
          <h2 className="text-lg font-extrabold sm:text-xl">
            Samar Engineering Services (SES)
          </h2>
          {/* <StaggerContainer staggerDelay={0.08} className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <StaggerItem key={social.label}>
                <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                    >
                      <social.icon/>
                    </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer> */}
          <p className="text-xs text-slate-300">
            © 2026. All rights reserved.
          </p>
        </FadeIn>

        {/* Consultation */}
        <FadeIn direction="up" delay={0.2} className="flex flex-col items-center gap-0.5 sm:items-end">
          <h3 className="text-base font-extrabold">Consultation</h3>
          {phoneNumbers.map((num) => (
            <Link
              key={num}
              href={`tel:${num.replace(/\s/g, "")}`}
              className="text-sm font-semibold text-slate-100 transition hover:text-sky-300"
            >
              {num}
            </Link>
          ))}
          <Link
            href="mailto:ses.business123@gmail.com"
            className="text-sm font-semibold text-slate-100 transition hover:text-sky-300"
          >
            ses.business123@gmail.com
          </Link>
        </FadeIn>
      </div>

      {/* Floating WhatsApp button */}
      <motion.a
        href="https://wa.me/923335003314"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-500 shadow-xl transition hover:bg-green-400"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <FaWhatsapp className="h-7 w-7 sm:h-auto sm:w-auto" size={35}/>
        </motion.div>
      </motion.a>
    </footer>
  );
};

export default Footer;
