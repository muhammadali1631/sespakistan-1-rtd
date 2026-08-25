"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPinterestP, FaFacebook, FaInstagram  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const SocialLinks = [
    {
        icon:FaInstagram,
        link:"",
    },
    {
        icon:FiMail,
        link:"",
    },
    {
        icon:FaFacebook,
        link:"",
    },
    {
        icon:FaPinterestP,
        link:"",
    },
]
const About = () => {
  return (
    <section className="bg-[#D4D4D4] ">

        <div className="flex flex-col lg:flex-row justify-between gap-5 py-8 items-center">
        {/* content */}
        <FadeIn direction="left" className="max-w-[650px]">
          <h3 className="font-[600] text-2xl sm:text-3xl pb-5">About Samar Engineering Services (SES)</h3>
        {/* Parqagraphs */}
        <div className="space-y-8 text-base sm:text-lg text-[#4d4d4d]">
          <p>
            Samar Engineering Services (SES) is a Pakistan Engineering Council (PEC)
            registered company specialising in turnkey office projects,
            workspace renovation, corporate interiors, MEP design, and complete
            building engineering solutions.
          </p>
          <p>
            With over a decade of experience, we help businesses across
            Islamabad, Rawalpindi, Lahore and nationwide to build modern,
            efficient and productive workspaces. Our team delivers each project
            with engineering accuracy, attention to detail and full
            transparency.
          </p>
          <p>
            We work closely with corporate clients, commercial buildings,
            multinational offices and government organisations providing design,
            build and maintenance solutions that are delivered on time, within
            budget, and with complete project accountability.
          </p>
        </div>

        {/* Social Links */}
        {/* <StaggerContainer staggerDelay={0.08} className="flex text-center mx-auto w-[200px] gap-5">
            {SocialLinks.map((item, index)=>(
                <StaggerItem key={index}>
                    <Link href={item.link}>
                        <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                            <item.icon size={25} className="hover:text-white"/>
                        </motion.div>
                    </Link>
                </StaggerItem>
            ))}
        </StaggerContainer> */}

        {/* Button */}
        <FadeIn direction="up" delay={0.3} className="flex justify-center">
            <Link href={'/about'}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#176BE0] cursor-pointer text-white py-4 font-semibold px-10 my-5 rounded-full">More About Us in Detail</motion.button>
            </Link>
        </FadeIn>

        </FadeIn>
        {/* Content */}
        <FadeIn direction="right" className="shrink-0">
            <Image src={'/home/about.avif'} alt="About" height={500} width={500} className="rounded-3xl w-full max-w-[500px] h-auto"/>
        </FadeIn>
        </div>

        {/* Banner */}
        <FadeIn direction="up" className=" border-y-4 border-[#033268] py-6">
            <h2 className="text-[#033268] font-bold text-2xl sm:text-3xl lg:text-4xl text-center">Delivering Modern Office Designs and End-to-End  <br className="hidden md:block" />
MEP Solutions in Pakistan</h2>
        </FadeIn>
    </section>
  );
};

export default About;
