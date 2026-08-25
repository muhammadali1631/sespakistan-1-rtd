"use client";

import RelativeLinks from "@/components/RelativeLinks";
import FixedImage from "@/components/services/FixedImage";
import ImageBanner from "@/components/services/ImageBanner";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const projectImages = [
  "/services/services6-images/image1.avif",
  "/services/services6-images/image2.avif",
  "/services/services6-images/image3.avif",
  "/services/services6-images/image4.avif",
  "/services/services6-images/image5.avif",
  "/services/services6-images/image6.avif",
  "/services/services6-images/image7.avif",
  "/services/services6-images/image8.avif",
  "/services/services6-images/image9.avif",
  "/services/services6-images/image10.avif",
];

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services6-images/hero.avif" />

      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl text-center px-4">
              Project Planning & Excution
            </h3>
        </FadeIn>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <FadeIn direction="up">
              <h4 className="text-center text-xl sm:text-2xl lg:text-5xl text-black font-semibold py-7 px-5">
                Smart Planning, Reliable Delivery
              </h4>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
              <p className="w-full max-w-[860px] mx-auto text-center font-semibold px-5 sm:px-8 lg:px-0">
                Samar Engineering Services (SES) offers complete project planning services, including
                feasibility studies, detailed drawings, budgeting, and execution
                roadmaps. Our Pakistani architects and engineers ensure every
                project is delivered on time and within budget
              </p>
          </FadeIn>

          <ImageBanner
            IMAGE_URL="/services/services6-images/banner.avif"
            text="At SES, we combine innovation, planning, and execution to deliver projects that exceed expectations"
          />

          <div className="flex flex-col lg:flex-row justify-between gap-8 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="left" className="space-y-8 w-full lg:max-w-[700px]">
              {/* First Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Key Services We Offer in Project Planning
              </h5>
              <ul className="list-disc pl-10">
                <li>
                  <span className="font-bold">
                    Feasibility Studies &amp; Cost Estimation –
                  </span>
                  Detailed analysis of project scope, budget, and resources.
                </li>
                <li>
                  <span className="font-bold">
                    2D &amp; 3D Design Planning –
                  </span>
                  Clear visualization of project concepts before execution.
                </li>
                <li>
                  <span className="font-bold">
                    Material Selection &amp; Specifications –
                  </span>
                  Helping clients choose reliable, cost-efficient materials.
                </li>
                <li>
                  <span className="font-bold">Execution Roadmaps –</span>
                  Timeline planning with milestones for smooth delivery.
                </li>
                <li>
                  <span className="font-bold">On-Site Supervision –</span>
                  Experienced Pakistani engineers monitoring quality and
                  progress.
                </li>
                <li>
                  <span className="font-bold">
                    Handover &amp; Documentation –
                  </span>
                  Complete project delivery with transparent reporting.
                </li>
              </ul>

              {/* Second Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Our Project Planning Process (Step by Step)
              </h5>
              <ul className="list-disc pl-10">
                <li>Initial Consultation &amp; Site Survey</li>
                <li>Concept &amp; Feasibility Study</li>
                <li>2D / 3D Design &amp; Planning</li>
                <li>Material Selection &amp; Budgeting</li>
                <li>Execution Roadmap &amp; Scheduling</li>
                <li>On-Site Supervision</li>
                <li>Final Handover &amp; Documentation</li>
              </ul>

              {/* Third Content */}
              <h5 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                Why Choose Samar Engineering Services (SES) Engineering for Project Planning?
              </h5>
              <ul className="list-disc pl-10">
                <li>Local expertise with Pakistani market knowledge.</li>
                <li>
                  Experienced team of architects, engineers, and managers.
                </li>
                <li>Transparent cost control and reporting.</li>
                <li>Commitment to on-time delivery.</li>
                <li>One-stop solution from concept to execution.</li>
              </ul>

              {/* Four Content */}
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
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
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
    </div>
  );
};

export default page;
