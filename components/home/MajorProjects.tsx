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
    image: "/home/major-project/new-2.jpeg",
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
    image: "/home/major-project/new-5.jpeg",
  },
  {
    image: "/home/major-project/major-project-img8.avif",
  },
  {
    image: "/home/major-project/new-image5.avif",
  },
  {
    image: "/home/major-project/new-image-9.avif",
  },
  {
    image: "/home/major-project/new-7.jpeg",
  },
];

const MajorProjects = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-10 gap-10 mt-5 pb-10">
      <FadeIn direction="left" className="w-full px-4 sm:px-0 lg:max-w-[900px]">
        <h4 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
          Mojor Projects
        </h4>
        <h6 className="font-bold ml-5 mb-3">Corporate Office Projects</h6>
        <ul className="list-disc text-[#616263]">
          <li>
            Ciklum Pakistan — Complete Office Design, MEP & Renovation Works
          </li>
          <li>EDOTCO Pakistan — Complete Floor Design & Renovation Works</li>
          <li>
            Teradata Global Pakistan — 55 AC Installations, Meeting Room MEP &
            Renovation Works – G-9 Office
          </li>
          <li>
            Gold Lion Pakistan — Complete Office Design, MEP & Renovation Works
          </li>
          <li>Intercargo Office — Complete Office Renovation Works</li>
          <li>Myco Engineers — Complete MEP Works</li>
          <li>Visual Soft — Complete Office Renovation & MEP Works</li>
          <li>Alexa Technology — Complete MEP Works</li>
          <li>
            Pepsi Pakistan — Meeting Room Development & Office Furniture Supply
          </li>
          <li>Telecom Foundation — Complete Office Renovation Works</li>
        </ul>

        <h6 className="font-bold ml-5 mb-3 mt-8">
          Commercial and Civil Projects
        </h6>
        <ul className="list-disc text-[#616263]">
          <li>
            PM House Pakistan — Rooftop Civil Works & HVAC Uplift/Replacement
            Works
          </li>
          <li>Zong CMPak – HQ — Road Construction & Civil Works</li>
          <li>
            Pakistan Army – CMH Peshawar — Complete Renovation Works, Surgical
            Tower – 3rd Floor
          </li>
          <li>
            Mangla Cantt – Baral Café — Café Design & Interior Design Works
          </li>
          <li>Parde Ground Islamabad — Fountain Installation & Civil Works</li>
        </ul>

        <FadeIn direction="up" delay={0.2} className="flex justify-center">
          <Link href={"/projects"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 cursor-pointer bg-[#0d335e] text-white font-bold rounded-full mt-16"
            >
              Project Gallery
            </motion.button>
          </Link>
        </FadeIn>
      </FadeIn>

      {/* Images */}
      <StaggerContainer
        staggerDelay={0.08}
        className="flex flex-wrap gap-4 sm:gap-2 items-end justify-center "
      >
        {ProjectImages.map((item, index) => (
          <StaggerItem key={index}>
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-40 w-32 sm:h-72 sm:w-50 overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                fill
                sizes="(max-width: 640px) 128px, 200px"
                alt="Project"
                className="object-cover object-top"
                quality={100}
              />
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default MajorProjects;
