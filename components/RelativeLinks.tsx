"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import FadeIn from "./motion/FadeIn";

const services = [
  { label: "Office Space Planning", href: "/services/office-space-planning" },
  { label: "MEP Services", href: "/services/mep-services" },
  { label: "DG Services & Supply", href: "/services/dg-supply-and-services" },
  { label: "3D Project Modeling", href: "/services/3d-project-modeling" },
  { label: "Project Planning", href: "/services/project-planning" },
  { label: "Facility Management", href: "/services/facility-management" },
  { label: "Human Outsourcing", href: "/services/human-outsourcing" },
  { label: "General Order Supply", href: "/services/general-order-supplier" },
];

const RelativeLinks = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 space-y-2 p-8">
      {services.map((service, idx) => (
        <FadeIn key={service.label} direction="up" delay={idx * 0.06} className="">
          <motion.div  whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href={service.href}
              className="rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {service.label}
            </Link>
          </motion.div>
        </FadeIn>
      ))}
    </div>
  );
};

export default RelativeLinks;
