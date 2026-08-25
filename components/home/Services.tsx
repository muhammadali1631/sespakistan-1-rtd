"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";
import FadeIn from "../motion/FadeIn";

const OurServices = [
  {
    name: "Office Interior Design & Turnkey Fit-Out",
    desc: "Build modern, efficient and high-performance workspaces with our complete turnkey office fit-out services. We provide corporate interior design, space planning, glass partitions, ceilings, flooring, furniture layout and brand integration all delivered with 3D visualisation and full project execution.",
    image: "/home/services/office.jpg",
    link: '/services/office-space-planning'
  },
  {
    name: "MEP Design, Installation & Commissioning",
    desc: "End-to-end Mechanical, Electrical & Plumbing (MEP) solutions for corporate and commercial buildings across Pakistan. Our services include HVAC systems, lighting design, power distribution, structured data cabling, fire safety systems and plumbing  engineered for reliability, safety and long-term performance.",
    image: "/home/services/mep-design.avif",
    link: '/services/mep-services'
  },
  {
    name: "IT Networking & Security Systems",
    desc: "We design and deploy complete IT infrastructure for modern offices, including structured cabling, Wi-Fi networks, server room setup, CCTV surveillance, biometric access control and integrated security systems. Our solutions ensure fast connectivity, secure operations and smooth digital performance for corporate environments.",
    image: "/home/services/it-networking.avif",
    link: '/services/mep-services'

  },
  {
    name: "Commercial & Residential Planning & Execution",
    desc: "Turnkey planning and execution for commercial and residential projects across Pakistan. We manage design, engineering, and project delivery with full compliance and precision. Reliable, sustainable solutions for offices, homes, and modern developments.",
    image: "/home/services/commercial.webp",
    link: '/services/office-space-planning'

  },
  {
    name: "Generator Supply & Services",
    desc: "Professional DG supply, installation, and preventive maintenance for uninterrupted power. Our team provides inspections, load testing, and rapid fault diagnostics. Trusted generator services for commercial and residential clients in Pakistan.",
    image: "/home/services/generator-supply.avif",
    link: '/services/dg-supply-and-services'
  },
  {
    name: "Facility Management",
    desc: "Complete facility management for offices, buildings, and corporate spaces. We provide HVAC, electrical, plumbing, and on-demand technical maintenance. Efficient, cost-effective FM services trusted across Pakistan.",
    image: "/home/services/facility-management.avif",
    link: '/services/facility-management'
  },
  {
    name: "Project 2D & 3D Modeling & Costing",
    desc: "We create accurate 2D drawings and 3D models for architecture, interiors, and MEP planning. Our BIM-ready visualizations improve design clarity, coordination, and project approvals.Transparent costing, BOQs, and estimates support efficient budgeting, bidding, and execution.",
    image: "/home/services/project-2d-3d.avif",
    link: '/services/3d-project-modeling'

  },
  {
    name: "HR Outsourcing",
    desc: "Our HR outsourcing solutions handle recruitment, payroll, compliance, and workforce management for growing businesses. We streamline HR operations, reduce costs, and ensure your teams remain productive and fully supported.",
    image: "/home/services/hr-outsourcing.avif",
    link: '/services/human-outsourcing'

  },
  {
    name: "General Order Supplier",
    desc: "We provide reliable General Order Supplier services in Pakistan, delivering high-quality materials and equipment for corporate, industrial, and commercial projects. Our sourcing network ensures timely procurement, competitive pricing, and trusted brands.",
    image: "/home/services/general.avif",
    link: '/services/general-order-supplier'
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
        <FadeIn direction="up">
            <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl my-7 font-bold uppercase text-black underline">Our Core Services</h3>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {OurServices.map((item, index)=>(
                <StaggerItem key={index}>
                    <motion.div
                        whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white rounded-t-2xl overflow-hidden"
                    >
                      <Link href={item.link}>
                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                            <Image src={item.image} alt={item.name} height={200} width={300} className="h-56 w-full object-cover"/>
                        </motion.div>
                        </Link>
                        <div className="w-full px-4 sm:px-5 py-3 space-y-3">
                            <h4 className="font-bold text-center text-lg sm:text-xl">{item.name}</h4>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    </div>
  );
};

export default Services;
