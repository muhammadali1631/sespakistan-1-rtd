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
  "/services/services4-images/projectimage1.avif",
  "/services/services4-images/projectimage2.avif",
  "/services/services4-images/projectimage3.avif",
  "/services/services4-images/projectimage4.avif",
  "/services/services4-images/projectimage5.avif",
  "/services/services4-images/projectimage6.avif",
];

const page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services4-images/hero.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center px-4">
              Keeping Your Power On, Anytime, Every Time
            </h3>
        </FadeIn>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <FadeIn direction="up">
              <h5 className="text-xl sm:text-2xl lg:text-4xl px-5 sm:px-10 text-center font-bold pt-5">
                Reliable Power, Every Time — Samar Engineering Services (SES) Generator Maintenance & Services
              </h5>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
              <p className="text-center py-3 sm:font-bold text-base sm:text-lg px-5 sm:px-10">
                At Samar Engineering Services (SES), we provide complete
                diesel generator maintenance and servicing solutions across
                Pakistan. From routine inspections to emergency repairs, our expert
                team ensures uninterrupted power for your offices, commercial
                buildings, and critical facilities.
              </p>
          </FadeIn>
          <ImageBanner
            IMAGE_URL="/services/services4-images/banner.webp"
            text="Powering Your Business with Reliable Generator Care."
          />

          <div className="flex flex-col lg:flex-row justify-between gap-8 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="left" className="space-y-8 w-full lg:max-w-[700px]">
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">Key Services We Offer</h5>
              <ul className="list-disc pl-10">
                <li>
                  <span className="font-bold">
                    Routine Inspections &amp; Preventive Care
                  </span>{" "}
                  – Regular checks to keep your generator in top condition.
                </li>
                <li>
                  <span className="font-bold">
                    Engine Tuning &amp; Calibration
                  </span>{" "}
                  – Fine-tuning for fuel efficiency and reliable performance.
                </li>
                <li>
                  <span className="font-bold">
                    Electrical &amp; Control Panel Checks
                  </span>{" "}
                  – Ensuring wiring, load management, and safety systems are
                  always operational.
                </li>
                <li>
                  <span className="font-bold">
                    Oil &amp; Filter Replacement
                  </span>{" "}
                  – Timely replacement to extend generator life.
                </li>
                <li>
                  <span className="font-bold">Emergency Breakdown Support</span>{" "}
                  – Quick response to restore power during failures.
                </li>
                <li>
                  <span className="font-bold">
                    Annual Maintenance Contracts (AMC)
                  </span>{" "}
                  – Hassle-free generator servicing with scheduled visits.
                </li>
              </ul>

              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Why Choose Samar Engineering Services (SES)?
              </h5>
              <ul className="list-disc pl-10">
                <li>
                  Certified and experienced technicians trained for{" "}
                  <span className="font-bold">
                    {" "}
                    Cummins and other global brands.
                  </span>
                </li>
                <li>Quick response time across Pakistan.</li>
                <li>Genuine spare parts and high-quality service.</li>
                <li>
                  Trusted by{" "}
                  <span className="font-bold"> leading organizations </span> for
                  reliability and professionalism.
                </li>
              </ul>
            </FadeIn>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 sm:gap-6">
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
          {/* Relative Links */}
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
