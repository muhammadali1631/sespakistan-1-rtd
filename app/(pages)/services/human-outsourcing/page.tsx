"use client";

import RelativeLinks from "@/components/RelativeLinks";
import FixedImage from "@/components/services/FixedImage";
import ImageBanner from "@/components/services/ImageBanner";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const projectImages = [
  "/services/services8-images/projectimage1.avif",
  "/services/services8-images/projectimage2.avif",
  "/services/services8-images/projectimage3.avif",
  "/services/services8-images/projectimage4.avif",
  "/services/services8-images/projectimage5.avif",
  "/services/services8-images/projectimage6.avif",
  "/services/services8-images/projectimage7.avif",
  "/services/services8-images/projectimage8.avif",
];

const page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services8-images/hero.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl text-center px-4">
              Skilled People, SES HR Services
            </h3>
        </FadeIn>
      </div>

      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <FadeIn direction="up">
              <h4 className="text-center text-xl sm:text-2xl lg:text-4xl text-black font-semibold py-7 px-5">
                Empowering Businesses with Reliable Workforce Solutions
              </h4>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
              <p className=" mx-auto text-center px-5 sm:px-8 lg:px-0">
                At Samar Engineering Services (SES), we provide skilled
                and unskilled workforce outsourcing solutions across Pakistan.
                Whether you need technical staff, administrative teams, or facility
                workers, we ensure reliable manpower support tailored to your
                project needs. Our focus is on quality, compliance, and
                cost-effectiveness, so your business never faces workforce
                shortages.
              </p>
          </FadeIn>
          <ImageBanner
            IMAGE_URL="/services/services8-images/banner-image.avif"
            text=" Your Trusted Partner in Human Outsourcing"
          />

          <div className="flex flex-col lg:flex-row justify-between gap-8 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="left" className="space-y-8 w-full lg:max-w-[700px]">
              {/* First Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Key HR Outsourcing Services
              </h5>
              <ul className=" pl-10 space-y-3">
                <li>
                  <span className="font-bold">
                    1. Technical Staff Outsourcing:
                  </span>
                  Engineers, supervisors, electricians, and MEP specialists for
                  short-term and long-term projects.
                </li>
                <li>
                  <span className="font-bold">
                    2. Administrative &amp; Office Staff:
                  </span>
                  Receptionists, data entry operators, clerks, and back-office
                  staff for smooth operations.
                </li>
                <li>
                  <span className="font-bold">3. Facility Support Staff:</span>
                  Janitors, housekeeping teams, drivers, and helpers for daily
                  facility operations.
                </li>
                <li>
                  <span className="font-bold">
                    4. Skilled &amp; Semi-Skilled Labor:
                  </span>
                  Carpenters, plumbers, painters, and other specialized workers
                  for construction and renovation projects.
                </li>
                <li>
                  <span className="font-bold">
                    5. Security &amp; Safety Staff:
                  </span>
                  Qualified security guards and safety officers to ensure
                  workplace protection.
                </li>
                <li>
                  <span className="font-bold">6. Project-Based Workforce:</span>
                  Custom workforce teams deployed as per client requirements and
                  project timelines.
                </li>
              </ul>

              {/* Second Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Why Choose SES for HR Services?
              </h5>
              <ul className="list-disc pl-10">
                <li>Wide pool of trained and verified manpower.</li>
                <li>Flexible short-term and long-term contracts.</li>
                <li>Nationwide coverage with quick deployment.</li>
                <li>Strong focus on quality, compliance, and reliability.</li>
              </ul>

              {/* Third Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">Industries We Serve</h5>
              <ul className="list-disc pl-10">
                <li>Corporate &amp; Commercial Offices</li>
                <li>Banks &amp; Financial Institutions</li>
                <li>Government Projects</li>
                <li>Residential Housing &amp; Apartments</li>
                <li>Educational &amp; Healthcare Facilities</li>
                <li>Industrial &amp; Warehouses</li>
              </ul>
            </FadeIn>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4 sm:gap-6">
              {projectImages.map((item, index) => (
                <StaggerItem key={index}>
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className="cursor-pointer" onClick={() => setSelectedImage(item)}>
                        <Image
                          src={item}
                          height={300}
                          width={350}
                          alt="Project"
                          className="object-cover bg-gray-300 h-44 sm:h-52 lg:h-58 w-full rounded-3xl"
                        />
                    </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <RelativeLinks/>
        </div>
      </div>

      <ImageLightbox
        src={selectedImage ?? ""}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default page;
