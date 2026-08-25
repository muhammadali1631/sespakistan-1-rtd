"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const CardsData = [
  {
    name: "Our Values",
    desc: "We committed to your well-being and comfort through thoughtful Design, BOQ, Cost Estimation & Execution . We prioritize functionality and optimal use of space, upholding our pledge to efficient, purpose-driven design that enhances everyday experience.",
    image: "/about/aimandobjective1.avif",
  },
  {
    name: "Our Mission",
    desc: "We are committed to enhance the quality of life of our clients through modern & practical designs. We believe in thoughtfully designed interiors to create spaces that will engage and inspire people within their space.",
    image: "/about/aimandobjective2.avif",
  },
  {
    name: "Our Impact",
    desc: "Elegance in interior design that centers on space planning as a core craft. Our approach goes beyond aesthetics and luxury, crafting efficient layouts that enhance daily life, productivity, and well-being across residential and non-residential environments.",
    image: "/about/aimandobjective3.avif",
  },
];

const AimObject = () => {
  return (
    <div className="border-y-4 border-[#033268] pb-10">
      <FadeIn direction="up">
          <h3 className="text-black/90 text-center font-bold text-2xl sm:text-3xl lg:text-5xl my-5 px-4">
            Aim & Objectives
          </h3>
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
          <div className="flex justify-center px-5">
            <p className="text-center w-full max-w-[700px] mb-10">
              At Samar Engineering Services (SES), we go beyond drawings and deadlines — we create
              smart, reliable solutions for offices, homes, and industries. From
              design to execution, our team delivers turn-key services with quality,
              care, and on-time results.
            </p>
          </div>
      </FadeIn>
      <StaggerContainer staggerDelay={0.15} className="flex flex-col sm:flex-row gap-6 lg:gap-10 justify-center items-center px-5 sm:px-8 lg:px-0">
        {CardsData.map((item, idx)=>(
          <StaggerItem key={idx}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full max-w-xs rounded-b-3xl bg-slate-100  shadow-sm flex flex-col justify-between"
            >
              <div>
              <h2 className="text-center text-lg font-extrabold pt-5 text-slate-900">
                {item.name}
              </h2>
      
              <p className="mt-2 px-5  text-sm text-slate-700">
               {item.desc}
              </p>
              </div>
      
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={item.image}
                    alt="Our mission"
                    className="mt-4 h-60 w-full rounded-3xl object-cover"
                    height={200}
                    width={200}
                  />
              </motion.div>
            </motion.div>
          </StaggerItem>
        ))}
        </StaggerContainer>
    </div>
  );
};

export default AimObject;
