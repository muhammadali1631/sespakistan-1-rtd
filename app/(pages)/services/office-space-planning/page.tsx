"use client";

import RelativeLinks from "@/components/RelativeLinks";
import FixedImage from "@/components/services/FixedImage";
import ImageBanner from "@/components/services/ImageBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const contentData = [
  {
    heading: "SPACE TRANSFORMATION:",
    para: "At Samar Engineering Services (SES), we specialize in transforming your workspace with our unique touch. Our approach combines innovative conceptual designs, thoughtful layout planning, and versatile furniture solutions to create an environment that inspires productivity.",
  },
  {
    heading: "INTERIOR EXPERTISE:",
    para: "We work closely with our clients to identify their specific needs, offering comprehensive solutions that include space planning, design, project management, and regulatory compliance.",
  },
  {
    heading: "SERVICE & QUALITY:",
    para: "As a manufacturer of office interior design furniture, we pride ourselves on delivering exceptional after-sales service and cultivating strong, lasting relationships with our clients.",
  },
  {
    heading: "DESIGN INTELLIGENCE:",
    para: "Beyond aesthetic appeal, we prioritize functionality and practicality as essential elements in our design process. Our designs are crafted to enhance the usability of your space while maintaining a stylish look.",
  },
  {
    heading: "ALWAYS ON TIME:",
    para: "At Samar Engineering Services (SES) we embody efficiency with traits like systematic planning, willingness to adapt, intelligence in problem-solving, and timely execution.",
  },
  {
    heading: "CUSTOMER RELATIONSHIP:",
    para: "We believe that strong relationships are vital. If you ever need assistance or advice, remember that we are just a call away. Your needs are important to us, and we're always here to help.",
  },
];

const ContentImages = [
  { image: "/services/service1-images/contentimage1.avif" },
  { image: "/general/general-image1.avif" },
  { image: "/services/service1-images/contentimage3.avif" },
  { image: "/services/service1-images/contentimage4.avif" },
  { image: "/general/new-office2.avif" },
];

const ProjectImages = [
  "/services/service1-images/project1.avif",
  "/services/service1-images/project2.avif",
  "/services/service1-images/project3.avif",
  "/services/service1-images/project4.avif",
  "/services/service1-images/project5.avif",
  "/services/service1-images/project6.avif",
  "/home/major-project/new-image4.avif",
  "/services/service1-images/project8.avif",
  "/home/major-project/new-image1.avif",
  "/home/major-project/new-image8.avif",
  "/home/major-project/major-project-5.avif",
  "/services/service1-images/project12.avif",
  "/home/major-project/new-image-9.avif",
  "/home/major-project/new-image7.avif",
  "/project/project-9/project-5.avif",
  "/project/project-9/project-6.avif",
  "/general/office-new-1.avif",
  "/general/new-office2.avif",
  "/project/project-5/project-3.avif",
  "/project/project-5/project-5.avif",
];

const page = () => {
  return (
    <div className="mt-20 lg:mt-36 ">
      <FixedImage imageUrl="/services/service1-images/mainimage.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up" className=" flex flex-col items-center space-y-4">
          <h3 className=" text-white text-xl sm:text-2xl lg:text-4xl font-semibold text-center px-4">
            Employees Productivity Needs Luxury
          </h3>
          <h4 className="bg-[#56585E] text-white font-semibold text-sm sm:text-base lg:text-2xl w-full text-center py-2">
            Take Your Corporate Meetings to New Heights
          </h4>
          <Link href={'/contact-us'}>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#033268] cursor-pointer text-white px-6 py-4 rounded-full">
            Share Your Drawings for Quotataion
          </motion.button>
          </Link>
        </FadeIn>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          {/* Content */}
          <div className="py-6 ">
            <FadeIn direction="up">
                <h5 className="text-black text-lg sm:text-xl lg:text-2xl font-semibold text-center px-5">
                  From layout planning to ergonomic details, we sculpt offices that
                  protect people and amplify human Potential.
                </h5>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
                <p className="text-black text-base sm:text-lg lg:text-2xl mx-5 sm:mx-8 lg:mx-10 my-5">
                  At SES we share a deep commitment to preserving our
                  planet's natural resources. Our designs aim to harmonize human
                  needs, economic viability, and environmental stewardship. We
                  believe that thoughtful design solutions enhance well-being,
                  create significant value in the workplace, and attract top talent
                  while keeping your current team healthy and engaged.
                </p>
            </FadeIn>
            <ImageBanner IMAGE_URL="/services/service1-images/banner2.avif" />
          </div>

          {/* Information */}
          <div className="flex flex-col lg:flex-row border-y-4 border-[#033268] justify-between gap-8 lg:gap-15 py-8 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="left" className="space-y-5 w-full lg:max-w-[700px]">
              {contentData.map((cont, idx) => (
                <div key={idx} className="space-y-4">
                  <h5 className="font-semibold uppercase text-lg sm:text-xl lg:text-2xl">
                    {cont.heading}
                  </h5>
                  <p>{cont.para}</p>
                </div>
              ))}
            </FadeIn>

            {/* Images */}
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4 sm:gap-6">
              {ContentImages.map((item, index) => (
                <StaggerItem key={index}>
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={item.image}
                          height={300}
                          width={350}
                          alt="Project"
                          className="object-cover bg-gray-300 h-44 sm:h-48 lg:h-52 w-full rounded-3xl"
                        />
                    </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Process Image */}
          <div className="border-b-4 py-4 border-[#033268]">
              <FadeIn direction="up">
                  <h4 className="text-black font-semibold text-2xl text-center">Office Renovation Services Includes</h4>
              </FadeIn>
              <Image src={'/services/service1-images/process.avif'} alt="" height={600} width={1000} className="w-full h-auto"/>
          </div>

          {/* Project Images */}
          <div className="py-10 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="up">
                <h4 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold">Latest Projects</h4>
                <p className="text-center font-semibold">
                  Design and Build Projects for Pakistan at Different Cities
                </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 md:grid-cols-5">
              {ProjectImages.map((image, idx) => (
                <StaggerItem key={idx}>
                    <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }} className="h-52 overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt="Project image"
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Links */}
          <RelativeLinks/>
        </div>
      </div>
    </div>
  );
};

export default page;
