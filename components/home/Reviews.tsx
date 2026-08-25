"use client";

import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";

const reviews = [
  {
    name: "Arshad Afzal",
    rating: 5,
    review:
      "I hired them for an office renovation; they explained concepts clearly with design multiple times and executed the project exactly as designed. Strong skills in project costing and BOQ, with delivery that matched the plan—keep it up. HIGHLY Satisfied",
  },
  {
    name: "Junaid Hussan",
    rating: 5,
    review:
      "Samar Engineering Services (SES) is smart and expert in MEP projects; they always plan through drawings and then execute with precision. Very quick response time, delivery quality, and durability—highly satisfied with the overall performance.",
  },
  {
    name: "Zohaib Ahmed",
    rating: 5,
    review:
      "We initially called Samar Engineering Services (SES) only for a concept of our Government Bank Head Office Data Center, but they went beyond expectations by providing complete drawings and PIP plans. We awarded them the project, and they delivered it with perfection and within the promised timeline.",
  },
  {
    name: "Fahad Jadoon",
    rating: 5,
    review:
      "We gave our office design and renovation project to Samar Engineering Services (SES), and they did an excellent job. The office turned out modern and practical, and everything was completed on time.",
  },
];

const Reviews = () => {
  return (
    <div className="border-t-4 border-[#033268] py-8">
      <FadeIn direction="up">
          <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Customer Reviews
          </h3>
          <h5 className="text-black text-xl sm:text-2xl font-bold text-center mb-5">
            What Customers Speak for Us
          </h5>
      </FadeIn>

      <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        {reviews.map((item, idx) => (
          <StaggerItem key={idx}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className=" bg-[#033268]  text-white p-5 px-5 sm:px-8 flex flex-col justify-between space-y-5"
            >
              <div className="flex text-yellow-300">
              {Array.from({ length: item.rating }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, type: "spring", stiffness: 400 }}
                >
                  <IoStar />
                </motion.div>
              ))}
              </div>
              <p>{item.review}</p>
              <h5>{item.name}</h5>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* FeedBack Image */}
      <FadeIn direction="up" delay={0.2}>
          <Image src={'/home/feedback.avif'} alt="Feedback" width={1920}
      height={600}
      sizes="100vw" className=" my-10 h-48 sm:h-72 lg:h-96 w-full rounded-3xl object-cover" />
      </FadeIn>
    </div>
  );
};

export default Reviews;
