"use client";

import React from "react";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const services = [
  "Architectural Design",
  "Interior Design",
  "Construction",
  "Renovation and Remodeling",
  "Project Management",
  "Turnkey Solutions",
];

const coreValues = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our interactions.",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek out new ideas and technologies to deliver cutting-edge solutions.",
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from design to execution.",
  },
  {
    title: "Client-Centricity",
    description:
      "We prioritize the needs and satisfaction of our clients above all else.",
  },
  {
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices and sustainable design.",
  },
];

const ProfileSection = () => {
  return (
    <section className="w-full border-t-4 border-[#033268] px-6 py-10 sm:px-10">
      <div className="">
        <FadeIn direction="up">
            <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              CORPORATE PROFILE
            </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
            <p className="mt-5 text-sm font-semibold text-slate-900">
              At Samar Engineering Services (SES), we offer a comprehensive range of services
              tailored to meet the diverse needs of our clients. Our services
              include:
            </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.06} className="mt-2 list-disc space-y-1 pl-6 text-sm font-bold text-slate-900">
          {services.map((service) => (
            <StaggerItem key={service}>
                <li>{service}</li>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.15}>
            <p className="mt-5 text-sm font-semibold text-slate-900">
              With our team of experienced architects, designers, engineers, and
              project managers, we provide end-to-end solutions from concept to
              completion, ensuring quality, efficiency, and cost-effectiveness
              throughout the project lifecycle.
            </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
            <p className="mt-4 text-sm font-semibold text-slate-900">
              At Samar Engineering Services (SES), we are guided by a set of core values that
              define who we are and how we operate:
            </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="mt-2 list-disc space-y-1 pl-6 text-sm text-slate-900">
          {coreValues.map((value) => (
            <StaggerItem key={value.title}>
                <li>
                  <span className="font-bold">{value.title}:</span>{" "}
                  {value.description}
                </li>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.25}>
            <h2 className="mt-6 text-sm font-bold text-slate-900">
              Get in Touch
            </h2>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              Interested in learning more about Samar Engineering Services (SES)? Contact us
              today to discuss your project needs and discover how we can help
              bring your vision to life.
            </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProfileSection;
