"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const Images = [
    {
        image:'/home/whyus/whyus-1.avif'
    },
    {
        image:'/home/whyus/whyus-2.avif'
    },
    {
        image:'/home/whyus/whyus-3.avif'
    },
    {
        image:'/home/whyus/whyus-4.avif'
    },
]

const WhyUs = () => {
  return (
    <div className="mt-10 border-y-4 border-[#033268]">
        <FadeIn direction="up">
            <h2 className="text-[#033268] font-bold text-2xl sm:text-3xl lg:text-4xl text-center my-6">
              WHY You Choose Samar Engineering Services (SES)
            </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
            <h4 className="font-extrabold text-center px-4">Samar Engineering Services (SES) offers end-to-end engineering and turnkey project services across <br className="hidden md:block" /> Islamabad, Rawalpindi, and nationwide</h4>
        </FadeIn>

        {/* Images */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-2 md:flex md:justify-between gap-5 my-10 px-2">
            {Images.map((img,idx)=>(
                <StaggerItem key={idx}>
                    <motion.div whileHover={{ scale: 1.05, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Image src={img.image} alt="Why Us" height={300} width={250} className="object-contain rounded-2xl w-full h-auto"/>
                    </motion.div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    </div>
  );
};

export default WhyUs;
