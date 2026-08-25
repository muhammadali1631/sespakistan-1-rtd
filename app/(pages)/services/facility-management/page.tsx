"use client";

import RelativeLinks from "@/components/RelativeLinks";
import FixedImage from "@/components/services/FixedImage";
import ServiceSection from "@/components/services/ServiceSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const processSteps = [
  { title: "Assessment", description: "Site survey & requirement analysis" },
  { title: "Planning", description: "Customized facility management plan" },
  {
    title: "Execution",
    description: "On-time, professional delivery with monitoring",
  },
];

const reasons = [
  "Pakistani expert staff with years of experience",
  "On-time and reliable service delivery",
  "Turnkey solutions covering soft + hard services",
  "Trusted by government and corporate clients",
];

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services7-images/hero.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl text-center px-4">
              Facility Management
            </h3>
        </FadeIn>
      </div>

      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <FadeIn direction="up" className="text-center space-y-3 px-5 sm:px-8 lg:px-0">
            <h4 className="font-semibold text-xl sm:text-2xl lg:text-4xl pt-5">
              Complete Facility Management <br /> Services for Your Business
            </h4>
            <p className="font-semibold w-full max-w-[650px] mx-auto">
              From Soft Services to Hard Services, Samar Engineering Services
              (SES) ensures smooth, reliable, and cost-effective facility
              management for offices, banks, industries, and institutions
            </p>
            <Link href={"/contact-us"}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#0d2a4a] cursor-pointer text-white px-8 py-3 rounded-full font-semibold">
                Get a Free Consultant
              </motion.button>
            </Link>
            <h6 className="font-semibold">Why Facility Management Matters</h6>
            <p className="text-start w-full max-w-[800px] mx-auto">
              Managing a facility is more than just maintenance — it's about
              creating safe, efficient, and comfortable spaces for people to
              work and grow. At Samar Engineering Services (SES), we combine
              technical expertise with practical solutions to keep your
              facilities running seamlessly.
            </p>
          </FadeIn>
          <ServiceSection />

          {/*  */}
          <div className="grid w-full grid-cols-1 items-center gap-10 p-5 sm:p-8 sm:grid-cols-2">
            <FadeIn direction="left">
              <h2 className="text-2xl font-extrabold text-slate-900">
                How We Work (Process Section)
              </h2>

              <p className="mt-4 text-lg text-slate-700">
                Show a <span className="font-bold">3-step process</span> with
                visuals:
              </p>

              <ol className="mt-2 list-decimal space-y-1 pl-6 text-lg text-slate-700">
                {processSteps.map((step) => (
                  <li key={step.title}>
                    <span className="font-bold">{step.title}</span> –{" "}
                    {step.description}
                  </li>
                ))}
              </ol>

              <h2 className="mt-8 text-2xl font-extrabold text-slate-900">
                Why Choose Samar Engineering Services (SES)?
              </h2>

              <ul className="mt-3 list-disc space-y-1 pl-6 text-lg text-slate-700">
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="right">
                <Image
                  src={"/services/services7-images/section-image.avif"}
                  height={400}
                  width={400}
                  alt="Engineering and Facility Management team"
                  className="h-96 w-full rounded-2xl object-cover"
                />
            </FadeIn>
          </div>

          <RelativeLinks />
        </div>
      </div>
    </div>
  );
};

export default page;
