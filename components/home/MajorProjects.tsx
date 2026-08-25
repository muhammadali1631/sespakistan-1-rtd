"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const ProjectImages = [
  {
    image: "/home/major-project/major-project-img1.avif",
  },
  {
    image: "/home/major-project/major-project-img2.avif",
  },
  {
    image: "/home/major-project/new-image1.avif",
  },
  {
    image: "/home/major-project/new-image2.avif",
  },
  {
    image: "/home/major-project/new-image3.avif",
  },
  {
    image: "/home/major-project/new-image8.avif",
  },
  {
    image: "/home/major-project/major-project-5.avif",
  },
  
  {
    image: "/home/major-project/new-image4.avif",
  },
  {
    image: "/home/major-project/major-project-img8.avif",
  },
  {
    image: "/home/major-project/new-image5.avif",
  },{
    image: "/home/major-project/new-image-9.avif",
  },{
    image: "/home/major-project/new-image7.avif",
  },
];

const MajorProjects = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-10 gap-10 mt-5 pb-10">
      <FadeIn direction="left" className="w-full px-4 sm:px-0 lg:max-w-[900px]">
        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">Mojor Projects</h4>
        <h6 className="font-bold ml-5 mb-3">Corporate Offices Projects</h6>
        <ul className="list-disc text-[#616263]">
          <li>Huawei 15 Floors Design and Execution</li>
          <li>PM House Complete Roof Top MEP Work</li>
          <li>Edotco Complete Floor Design and Build</li>
          <li>60 AC Installation in State Life Building</li>
          <li>AEO Education Regional Office Design and Build</li>
          <li>JVL Teleconferance Room Dolmen Mall Karachi</li>
          <li>IGI Insurance Office Space Planning and Build Peshawar</li>
          <li>Prade Ground Fountains Installation</li>
          <li>Chines Kitchen Dinning Hall and Kitchen Work</li>
          <li>Ufone 23 Floor Complete Office Design and Renovation</li>
        </ul>
        <h6 className="font-bold ml-5 mb-3 mt-8">Commercial and Retail Projects</h6>
        <ul className="list-disc text-[#616263]">
          <li>Mantra Shop The Centaurus Mall</li>
          <li>Rafy Tower Gulberg Green</li>
          <li>Vostro World F-11 GYM</li>
          <li>Fitnastic Club F-7 GYM</li>
          <li>FOX and Knoxx Inverter Display Walls North Region</li>
          <li>Police Accademy GYM</li>
          <li>WHO Head Office GYM</li>
          <li>Pizza Haven Resturant Bahria Phase 7</li>
          <li>Behbud Association Signs Boards</li>
        </ul>

        <FadeIn direction="up" delay={0.2} className="flex justify-center">
            <Link href={'/projects'}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-10 py-4 cursor-pointer bg-[#0d335e] text-white font-bold rounded-full mt-16">Project Gallery</motion.button>
            </Link>
        </FadeIn>
      </FadeIn>

      {/* Images */}
      <StaggerContainer staggerDelay={0.08} className="flex flex-wrap gap-4 sm:gap-2 items-end justify-center ">
        {ProjectImages.map((item, index)=>(
            <StaggerItem key={index}>
                <motion.div whileHover={{ scale: 1.08, rotate: 1 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Image src={item.image} height={300} width={250} alt="Project" className="object-cover bg-gray-300 h-40 w-32 sm:h-72 sm:w-50 rounded-3xl"/>
                </motion.div>
            </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default MajorProjects;
