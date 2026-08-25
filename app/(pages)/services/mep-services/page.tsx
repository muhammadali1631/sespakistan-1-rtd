"use client";

import RelativeLinks from "@/components/RelativeLinks";
import FixedImage from "@/components/services/FixedImage";
import ImageBanner from "@/components/services/ImageBanner";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const contentData = [
  {
    heading: "Breakdown, Repair, and Planned Maintenance ",
    para: "Rapid-response services engineers and technicians deployed nationwide to address equipment breakdowns and system failures, often on short notice.Scheduled preventive maintenance for specialist HVACR equipment beyond client in-house capabilities. A proactive approach to reduce the total cost of ownership by preventing failures in warm climates where outages have significant impact.",
  },
  {
    heading: "Preventative Maintenance Agreements",
    para: "Customized PM plans keep HVACR assets in peak condition, reducing unexpected calls.Available for 1, 2, or 3-year terms to fit asset lifecycle and budgets.Includes routine inspections, performance checks, and prioritized maintenance windows.Optional remote diagnostics and real-time monitoring add-ons.Comprehensive reporting and proactive recommendations for continuous improvement. Site assessment, tailored plan, and periodic reviews to adapt to change.",
  },
  {
    heading: "Installation & Commissioning",
    para: "Samar Engineering Services (SES) installation team comprises qualified engineers and technicians. We install all HVACR components and subsystems, including ductwork, dampers, fans, and air conditioning equipment.Refrigeration plants, electrical systems, and instrumentation are within our scope. We specialize in Residential, Corporate and Open Space.",
  },
  {
    heading: "Duct Cleaning",
    para: "Regular duct inspection and cleaning is a Samar Engineering Services (SES) health-and-safety priority, mitigating spores and microorganisms and reducing respiratory risks. We address duct buildup and debris that can compromise system performance, airflow, and energy efficiency.",
  },
  {
    heading: "Spare Parts",
    para: "Samar Engineering Services (SES) maintains robust partnerships with major manufacturers to source a wide range of engineering equipment and spares efficiently and cost-effectively. Spares Unlimited supports repairs and maintenance with prompt, reliable parts supply to minimize downtime.",
  },
];
const projectImages1 = [
  "/services/services2-images/projectimage1.avif",
  "/home/major-project/major-project-5.avif",
  "/general/general-image5.avif",
  "/services/services2-images/projectimage4.avif",
  "/general/general-image6.avif",
];
const projectImages2 = [
  "/services/services2-images/secondproject1.avif",
  "/services/services2-images/secondproject2.avif",
  "/services/services2-images/secondproject3.avif",
  "/services/services2-images/secondproject4.avif",
  "/services/services2-images/secondproject5.avif",
  "/services/services2-images/secondproject6.avif",
  "/services/services2-images/secondproject7.avif",
  "/services/services2-images/secondproject8.avif",
];

const ProjectImages = [
  "/services/services2-images/bottomproject1.avif",
  "/services/services2-images/bottomproject2.avif",
  "/services/services2-images/bottomproject3.avif",
  "/services/services2-images/bottomproject4.avif",
  "/services/services2-images/bottomproject5.avif",
  "/services/services2-images/bottomproject6.avif",
  "/services/services2-images/bottomproject7.avif",
  "/services/services2-images/bottomproject8.avif",
  "/services/services2-images/bottomproject9.avif",
  "/services/services2-images/bottomproject10.avif",
];

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/services/services2-images/hero.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center px-4">
              Skilled MEP Coordination to Prevent Clash Conflicts
            </h3>
        </FadeIn>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          {/* Content banner */}
          <ImageBanner IMAGE_URL="/services/services2-images/bannerimage.avif" />
          <FadeIn direction="up">
              <h4 className="text-black text-xl sm:text-2xl lg:text-5xl text-center font-bold px-5 sm:px-8 lg:px-0">
                Building Electrical Remodeling
              </h4>
          </FadeIn>

          <div className="flex flex-col lg:flex-row mt-5 justify-between pb-10 gap-8 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="left" className="space-y-5 w-full lg:max-w-[700px]">
              <p>
                We know regulations matter for your business. That's why we
                offer practical, compliant electrical solutions you can trust.
                From the first install to ongoing maintenance and any repairs,
                we've got you covered with an end-to-end service. Our team is
                made up of qualified, safety-focused electricians who take pride
                in doing high-quality work. Whether you're adding power and
                lighting points, rewiring, or starting a new installation, we
                handle it all with care and clarity.We serve homes, residential
                complexes, commercial buildings, industrial facilities, and
                corporate campuses across Pakistan.
              </p>
              <ul className="list-disc space-y-1 pl-5 font-semibold">
                <li>Electrical work</li>
                <li>Cabling management</li>
                <li>Cable arrangement under workstation</li>
                <li>All electrical faults maintenance</li>
                <li>Repairing and new wiring installations</li>
                <li>Complete Project Electrical Work</li>
                <li>Tube light fixing ceiling</li>
                <li>New sockets installing</li>
                <li>Switches &amp; sockets changing</li>
                <li>New electric wiring</li>
                <li>DB installation and fixing</li>
                <li>LCD fixing or LCD hanging on a wall</li>
                <li>Lights fixing or installing</li>
                <li>Globes fixing or installing</li>
                <li>Any electrical short circuit</li>
                <li>Generator installation and repair services</li>
                <li>Motor installation and repairing</li>
                <li>Electrical fittings &amp; fixtures services</li>
                <li>Home appliance repair</li>
                <li>Audio-video system</li>
                <li>Home appliances</li>
              </ul>
            </FadeIn>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4 sm:gap-6">
              {projectImages1.map((item, index) => (
                <StaggerItem key={index}>
                    <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={item}
                          height={300}
                          width={350}
                          alt="Project"
                          className="object-cover bg-gray-300 h-44 sm:h-52 lg:h-60 w-full rounded-3xl"
                        />
                    </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Content Data 2 */}
          <div className="border-y-4 border-[#033268]">
            <FadeIn direction="up">
                <h4 className="text-black text-xl sm:text-2xl lg:text-4xl mt-5 text-center font-bold px-5">
                  Sustainable Cooling & Heating for Large-Scale Facilities
                </h4>
            </FadeIn>
            <ImageBanner IMAGE_URL="/services/services2-images/bannerimage2.avif" />

            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-15 py-8 px-5 sm:px-8 lg:px-0">
              <FadeIn direction="left" className="space-y-5 w-full lg:max-w-[700px]">
                <p>
                  SES delivers a comprehensive range of
                  service offerings designed to ensure asset reliability,
                  regulatory compliance, and operational excellence across
                  residential, corporate, industrial, and commercial
                  environments. Our service portfolio blends ad-hoc support,
                  planned maintenance, and compliance inspection with
                  installation, commissioning, and integrity management for our
                  projects and product divisions.
                </p>
                {contentData.map((cont, idx) => (
                  <div key={idx} className="space-y-4">
                    <h5 className="font-semibold uppercase text-xl sm:text-2xl">
                      {cont.heading}
                    </h5>
                    <p>{cont.para}</p>
                  </div>
                ))}
              </FadeIn>

              {/* Images */}
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 gap-4 sm:gap-6">
                {projectImages2.map((item, index) => (
                  <StaggerItem key={index}>
                      <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }}>
                          <Image
                            src={item}
                            height={300}
                            width={350}
                            alt="Project"
                            className="object-cover bg-gray-300 h-44 sm:h-52 lg:h-60 w-full rounded-3xl"
                          />
                      </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          <div className="py-10 px-5 sm:px-8 lg:px-0">
            <FadeIn direction="up">
                <h4 className="text-center font-semibold text-2xl sm:text-3xl lg:text-5xl">
                  MEP Projects
                </h4>
                <p className="text-center font-semibold">
                  Some Major Projects Highlights of MEP Projects all Over Pakistan
                </p>
            </FadeIn>
            <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 pt-8">
              {ProjectImages.map((image, idx) => (
                <StaggerItem key={idx}>
                    <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={image}
                          alt="Project image"
                          className="h-full w-full object-cover"
                          height={300}
                          width={300}
                        />
                    </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <RelativeLinks/>
        </div>
      </div>
    </div>
  );
};

export default page;
