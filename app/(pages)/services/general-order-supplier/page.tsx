"use client";

import RelativeLinks from '@/components/RelativeLinks'
import FixedImage from '@/components/services/FixedImage'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const images = [
  "/services/services9-images/new-images-1.avif",
  "/services/services9-images/new-images-2.avif",
  "/services/services9-images/new-images-3.avif",
  "/services/services9-images/new-images-4.avif",
  "/services/services9-images/new-images-5.avif",
  "/services/services9-images/new-images-6.avif",
  "/services/services9-images/new-images-7.avif",
]

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services9-images/banner.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center px-4">
              General Order Supply
            </h3>
        </FadeIn>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4 sm:gap-6 py-10 px-5 sm:px-8 lg:px-0">
            {images.map((image, index) => (
              <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden rounded-2xl bg-gray-100"
                  >
                    <Image
                      src={image}
                      alt={`General order supplier product ${index + 1}`}
                      width={800}
                      height={550}
                      className="h-44 sm:h-56 lg:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <RelativeLinks/>
        </div>
      </div>
    </div>
  )
}

export default page
