"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";


interface ServiceItem {
  image: string;
  label: string;
}


const softServices: ServiceItem[] =[
    {
        image: '/services/services7-images/soft-services1.avif',
        label: "Office Cleaning & Housekeeping"
    },
    {
        image: '/services/services7-images/soft-services2.avif',
        label: "Security Management Services"
    },
    {
        image: '/services/services7-images/soft-services3.avif',
        label: "Reception Services"
    },
    {
        image: '/services/services7-images/soft-services4.avif',
        label: "Landscaping & Green Management"
    },
    {
        image: '/services/services7-images/soft-services5.avif',
        label: "Pest Control Services"
    },
    {
        image: '/services/services7-images/soft-services6.avif',
        label: "Waste Management Services"
    },
]

const hardServices: ServiceItem[] = [
    {
        image: "/services/services7-images/hardservices1.avif",
        label:"HVAC Operation & Maintenance",
    },
    {
        image: "/services/services7-images/hardservices2.avif",
        label:"HVAC Operation & Maintenance",
    },
    {
        image: "/services/services7-images/hardservices3.avif",
        label:"HVAC Operation & Maintenance",
    },
    {
        image: "/services/services7-images/hardservices4.avif",
        label:"HVAC Operation & Maintenance",
    },
    {
        image: "/services/services7-images/hardservices5.avif",
        label:"HVAC Operation & Maintenance",
    },
    {
        image: "/services/services7-images/hardservices6.avif",
        label:"HVAC Operation & Maintenance",
    },
]



const ServiceSection = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-10 p-8 sm:grid-cols-2">
      <div>
        <FadeIn direction="up">
            <h2 className="text-center text-lg font-bold text-slate-900">
              Soft Services
            </h2>
            <p className="mt-2 text-center text-sm text-slate-700 h-16">
              Our soft services team takes care of the little details — from
              cleanliness and security to guest handling and landscaping — so
              your office runs smoothly every day
            </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="mt-6 grid grid-cols-2 gap-6">
          {softServices.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                height={150}
                width={150}
                  src={item.image}
                  alt={item.label}
                  className="h-48 w-full object-cover rounded-2xl"
                />
                <div className="flex justify-center items-center relative">
                <p className="bg-white text-center absolute -bottom-3  mx-auto px-3 py-3 text-sm font-bold text-slate-900">
                  {item.label}
                </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <div>
        <FadeIn direction="up" delay={0.1}>
            <h2 className="text-center text-lg font-bold text-slate-900">
              Hard Services
            </h2>
            <p className="mt-2 text-center text-sm text-slate-700">
              Samar Engineering Services (SES) delivers reliable hard services including HVAC,
              electrical, plumbing, fire safety, and preventive maintenance to
              keep your facilities running without interruption
            </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="mt-6 grid grid-cols-2 gap-6">
          {hardServices.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                height={150}
                width={150}
                  src={item.image}
                  alt={item.label}
                  className="h-48 w-full object-cover rounded-2xl"
                />
                <div className="flex justify-center items-center relative">
                <p className="bg-white text-center absolute -bottom-3  mx-auto px-3 py-3 text-sm font-bold text-slate-900">
                  {item.label}
                </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default ServiceSection;
