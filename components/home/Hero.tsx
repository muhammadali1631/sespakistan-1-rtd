"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative isolate mt-22 min-h-[580px] overflow-hidden sm:mt-26 lg:mt-32 lg:min-h-[550px]">
      {/* Background Image */}
      <Image
        src="/home/hero3.avif"
        alt="Modern corporate office"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-left"
      />
          <div className="absolute inset-0 -z-10 bg-white/35" />

      {/* Content */}
      <div className="mx-auto flex min-h-[580px] w-full max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:min-h-[650px] sm:px-6">
        
        {/* Top Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.12em] text-green-600 sm:text-sm md:text-base"
        >
          Turnkey Office &amp; Corporate
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-1 text-3xl font-black uppercase leading-none tracking-tight text-[#06366d] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Fit-Out Experts
        </motion.h1>

        {/* Pakistan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-2 flex items-center gap-3 sm:mt-3 sm:gap-4"
        >
          <span className="hidden h-px w-10 bg-green-600 sm:block md:w-16" />

          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#06366d] sm:text-base md:text-lg">
            In Pakistan
          </p>

          <span className="hidden h-px w-10 bg-green-600 sm:block md:w-16" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-4 max-w-xl text-xs font-semibold leading-relaxed  text-slate-900 sm:mt-5 sm:text-sm md:text-base"
        >
          Complete Design, Build &amp; MEP Solutions for Offices,
          <br className="hidden sm:block" />
          Corporate Spaces &amp; Commercial Buildings
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-lg bg-lime-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-lime-600 sm:px-6 sm:text-sm"
          >
            Our Services
            <span className="ml-2">→</span>
          </motion.a>

          <motion.a
            href="/home/pec-certificate.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-lg bg-[#06366d] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#052b59] sm:px-6 sm:text-sm"
          >
            PEC Certificate
            <span className="ml-2">↓</span>
          </motion.a>
        </motion.div>

        {/* Bottom Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-5 text-sm font-extrabold text-slate-900 sm:mt-6 sm:text-base md:text-lg"
        >
          Transforming Workspaces for Over a Decade
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
