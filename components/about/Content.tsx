"use client";

import React from "react";
import FadeIn from "../motion/FadeIn";

const Content = () => {
  return (
    <section className="w-full  px-6 py-12 ">
      <div className="">
        <FadeIn direction="up">
            <h1 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
              Where Creativity Meets Comfort
            </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
            <h2 className="mt-8 text-xl font-bold text-black sm:text-2xl">
              With a Nationwide Footprint and 12 years of experience, we deliver
              consistent, proven results.
            </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
            <p className="my-8 text-slate-700">
              Samar Engineering Services (SES) delivers meticulous, client-focused
              engineering and integrated services. A dedicated project manager
              guides each engagement from objective definition to scope clarity.
              We streamline planning, budgeting, and scheduling to align with
              project phases and timelines.
            </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
            <p className=" mb-8 text-slate-700">
              Our approach consolidates trades under a single trusted point of
              contact, reducing friction. We prioritize reliability, transparency,
              and long-term client partnerships. Our clients span
              telecommunications, NGOs, private industry, public sector, and
              financial institutions.
            </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.25}>
            <p className=" text-slate-700">
              Flexible scheduling minimizes disruption during installations and
              transitions. We continuously improve service, integrating essential
              items and modern tech solutions. We maintain readiness to meet
              evolving project needs with timely support.
            </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Content;
