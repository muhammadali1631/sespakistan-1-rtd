"use client";

import ImageBanner from "@/components/services/ImageBanner";
import ImageCard from "@/components/services/ImageCard";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const OurServices = [
    {
        name:"Office Space Planning",
        image:"/services/service1.avif",
        link:"/office-space-planning"
    },
    {
        name:"Electrical & IT Solutions",
        image:"/services/service2.avif",
        link:"/mep-services"
    },
    {
        name:"MEP Services",
        image:"/services/service3.avif",
        link:"/mep-services"
    },
    {
        name:"Generator Supply & Services",
        image:"/services/service5.avif",
        link:"/general-order-supplier"
    },
    {
        name:"Project Planning & Build",
        image:"/services/service6.avif",
        link:"/project-planning"
    },
    {
        name:"2D and 3D Modeling",
        image:"/services/service7.avif",
        link:"/3d-project-modeling"
    },
    {
        name:"Facility Management",
        image:"/services/service8.avif",
        link:"/facility-management"
    },
    {
        name:"HR Outsourcing",
        image:"/services/service9.avif",
        link:"/human-outsourcing"
    },
    {
        name:"General Trading",
        image:"/services/service10.avif",
        link:"/general-order-supplier"
    },
]


const page = () => {
  return (
    <div className="mt-20 lg:mt-36 ">
      <Image
        src={"/services/servicemain.avif"}
        alt="Main Image"
        height={600}
        width={1000}
        sizes="100vw"
        className="fixed -z-10 h-screen max-h-full object-cover w-full top-20 lg:top-36 left-0"
      />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="uppercase text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center px-4">
              Our Services
            </h3>
        </FadeIn>
      </div>
      <div className="bg-[#BDBDBD]">
        <div className="max-w-[1200px] mx-auto ">
          <ImageBanner IMAGE_URL={"/services/image2.avif"} text="Complete Business Solution"/>

          <StaggerContainer staggerDelay={0.1} className="flex flex-wrap justify-center pb-10">
            {OurServices.map((item, idx)=>(
                <StaggerItem key={idx}>
                    <ImageCard Card={item}/>
                </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
};

export default page;
