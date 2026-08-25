"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";

const ImageBanner = ({
  IMAGE_URL,
  text,
}: {
  IMAGE_URL: string;
  text?: string;
}) => {
  return (
    <div className="relative w-full py-10 px-3">
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={IMAGE_URL}
          alt="Complete Business Solution"
          width={1000}
          height={320}
          quality={100}
          className={`h-40 sm:h-80 w-full rounded-3xl object-cover ${
            text ? "brightness-75" : ""
          }`}
        />
      </motion.div>
      {text && (
        <FadeIn direction="up" delay={0.2} className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl font-extrabold text-center px-10 text-white drop-shadow-md sm:text-3xl">
            {text}
          </h2>
        </FadeIn>
      )}
    </div>
  );
};

export default ImageBanner;
