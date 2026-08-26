"use client";

import RelativeLinks from "@/components/RelativeLinks";
import ImageLightbox from "@/components/ui/ImageLightbox";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import FadeIn from "@/components/motion/FadeIn";

const page = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-20 lg:mt-36">
      <Image
        src="/services/services5-images/hero.avif"
        alt="Main Image"
        height={600}
        width={1000}
        sizes="100vw"
        className="fixed -z-10 h-screen max-h-full object-cover w-full top-20 lg:top-36 left-0"
      />
      <div className="h-[90vh] flex flex-col items-center justify-center w-full bg-black/50 ">
        <FadeIn direction="up">
            <h3 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl text-center px-4">
              3D & 2D Project <br />
              Designing & Modeling
            </h3>
        </FadeIn>
        <Link href={'/contact-us'}>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-3 cursor-pointer sm:px-10 py-3 text-sm sm:text-xl text-white sm:font-semibold bg-black my-5 rounded-full mx-4 text-center">
            Share Your Idea Here for Proejct Designing
          </motion.button>
        </Link>
      </div>

      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          {/* Content with Image 1 */}
          <div className="flex justify-between flex-wrap-reverse items-center pt-10 gap-8 px-4 sm:px-6 lg:px-0">
            <FadeIn direction="left" className="w-full max-w-[700px]">
              <p className="font-bold text-base sm:text-lg">
                Samar Engineering Services (SES) is your partner for complete interior and
                exterior project design and 3D modeling. We translate concepts
                into vivid, client-ready visuals, so you can see exactly what
                your project will look like before a single step is taken or a
                single dollar is spent. Our goal is to help you visualize the
                final result, validate ideas, and make informed decisions that
                save time and money.
              </p>

              <div className="space-y-4 py-5">
                <h5 className="text-xl sm:text-2xl font-bold">What We Do:</h5>
                <ul className="list-disc pl-6 sm:pl-10 text-base sm:text-lg">
                  <li>
                    <span className="font-bold">
                      Interior Design &amp; Visualization:
                    </span>
                    Concept development, space planning, material boards, and
                    photorealistic 3D renderings.
                  </li>
                  <li>
                    <span className="font-bold">
                      Exterior &amp; Architectural Design:
                    </span>
                    Facade concepts, landscape integration, daylight studies,
                    and exterior renderings.
                  </li>
                  <li>
                    <span className="font-bold">3D Modeling &amp; BIM:</span>
                    Highly accurate models for coordination, simulation, and
                    construction planning.
                  </li>
                  <li>
                    <span className="font-bold">Concept to Client Proofs:</span>
                    Realistic visuals that show exactly how the finished project
                    will appear, ensuring alignment with client vision.
                  </li>
                  <li>
                    <span className="font-bold">
                      Pre-Construction Visualization:
                    </span>
                    Interactive walkthroughs, material previews, and
                    cost-visualization to demonstrate ROI.
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <Image
                src={"/services/services5-images/image1.avif"}
                alt="Project"
                height={500}
                width={400}
                className="h-[320px] sm:h-[420px] lg:h-[500px] w-[85vw] max-w-[440px] sm:w-[440px] object-cover rounded-4xl cursor-pointer"
                onClick={() => setSelectedImage("/services/services5-images/image1.avif")}
              />
            </FadeIn>
          </div>

          {/* Content with Image 2 */}
          <div className="flex justify-between flex-wrap-reverse items-center pt-10 gap-8 px-4 sm:px-6 lg:px-0">
            <FadeIn direction="left" className="w-full max-w-[700px]">
              <div className="space-y-4 py-5">
                <h5 className="text-xl sm:text-2xl font-bold">
                  Why Choose Samar Engineering Services (SES) For Project Designing :
                </h5>
                <ul className="list-disc pl-6 sm:pl-10 text-base sm:text-lg">
                  <li>
                    <span className="font-bold">
                      Clarity Before Commitment:
                    </span>
                    See precisely how your project will look, long before plans
                    are finalized or budgets are approved.
                  </li>
                  <li>
                    <span className="font-bold">Cost Transparency:</span>
                    Our visualizations help you understand potential outcomes
                    and ROI, enabling smarter investment decisions.
                  </li>
                  <li>
                    <span className="font-bold">Efficient Communication:</span>
                    Clear visuals bridge gaps between designers, clients, and
                    stakeholders, reducing revisions and misinterpretations.
                  </li>
                  <li>
                    <span className="font-bold">Expertise Across Phases:</span>
                    From concept to completion, our team supports design
                    development, coordination, and presentation.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 py-5">
                <h5 className="text-xl sm:text-2xl font-bold">
                  Our Process Before Desining any Progect
                </h5>
                <ul className="list-disc pl-6 sm:pl-10 text-base sm:text-lg">
                  <li>
                    <span className="font-bold">Discovery &amp; Briefing:</span>
                    We capture your goals, site constraints, budget, and
                    timeline. We ask the right questions to ensure alignment
                    from the start.
                  </li>
                  <li>
                    <span className="font-bold">Concept Development:</span>
                    We generate multiple design directions, focusing on
                    aesthetics, functionality, and feasibility.
                  </li>
                  <li>
                    <span className="font-bold">
                      3D Modeling &amp; Visualization:
                    </span>
                    High-fidelity 3D models and photorealistic renderings bring
                    ideas to life, with materials, lighting, and textures
                    accurately represented.
                  </li>
                  <li>
                    <span className="font-bold">
                      Client Proofs &amp; Validation:
                    </span>
                    Interactive walkthroughs and renders help you validate the
                    concept against your expectations.
                  </li>
                  <li>
                    <span className="font-bold">
                      Refinement &amp; Finalization:
                    </span>
                    We iterate based on your feedback to finalize design intent,
                    ensuring it matches your vision and budget.
                  </li>
                  <li>
                    <span className="font-bold">
                      Pre-Construction Visualization:
                    </span>
                    Final visuals, staging plans, and cost-conscious scenarios
                    to guide procurement and sequencing.
                  </li>
                  <li>
                    <span className="font-bold">Cost Transparency:</span>
                    Our visualizations help you understand potential outcomes
                    and ROI, enabling smarter investment decisions.
                  </li>
                  <li>
                    <span className="font-bold">Efficient Communication:</span>
                    Clear visuals bridge gaps between designers, clients, and
                    stakeholders, reducing revisions and misinterpretations.
                  </li>
                  <li>
                    <span className="font-bold">Expertise Across Phases:</span>
                    From concept to completion, our team supports design
                    development, coordination, and presentation.
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <Image
                src={"/services/services5-images/image2.avif"}
                alt="Project"
                height={500}
                width={400}
                className="h-[320px] sm:h-[420px] lg:h-[500px] w-[85vw] max-w-[440px] sm:w-[440px] object-cover rounded-4xl cursor-pointer"
                onClick={() => setSelectedImage("/services/services5-images/image2.avif")}
              />
            </FadeIn>
          </div>

          {/* Content with Image 3 */}
          <div className="flex justify-between flex-wrap-reverse items-center pt-10 gap-8 px-4 sm:px-6 lg:px-0">
            <FadeIn direction="left" className="w-full max-w-[700px]">
              <div className="space-y-4 py-5">
                <h5 className="text-xl sm:text-2xl font-bold">Our Services Includes:</h5>
                <ul className="list-disc pl-6 sm:pl-10 text-base sm:text-lg">
                  <li>
                    <span className="font-bold">Photorealistic Renders:</span>
                    Step-by-step visuals that resemble the finished project.
                  </li>
                  <li>
                    <span className="font-bold">Concept Boards:</span>
                    Mood, color palettes, textures, and material concepts.
                  </li>
                  <li>
                    <span className="font-bold">
                      3D Walkthroughs &amp; Tours:
                    </span>
                    Immersive experiences that help you feel the space.
                  </li>
                  <li>
                    <span className="font-bold">
                      Kickoff to Construction Coordination:
                    </span>
                    Models and drawings that support coordination with
                    contractors.
                  </li>
                  <li>
                    <span className="font-bold">
                      Virtual Reality Previews (where applicable):
                    </span>
                    Immersive VR experiences for stakeholder reviews.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 py-5">
                <h5 className="text-xl sm:text-2xl font-bold">Client Benefits:</h5>
                <ul className="list-disc pl-6 sm:pl-10 text-base sm:text-lg">
                  <li>Make informed decisions with confidence</li>
                  <li>See the end result before investing heavily</li>
                  <li>Minimize changes during construction</li>
                  <li>
                    Present a compelling, data-driven visual story to
                    stakeholders
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <Link href={'/contact-us'}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-3 sm:px-10 py-4 cursor-pointer text-white sm:font-semibold sm:text-xl bg-black my-5 rounded-full">
                      Share Your Idea Here for Proejct Designing
                    </motion.button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <Image
                src={"/services/services5-images/image2.avif"}
                alt="Project"
                height={500}
                width={400}
                className="h-[320px] sm:h-[420px] lg:h-[500px] w-[85vw] max-w-[440px] sm:w-[440px] object-cover rounded-4xl cursor-pointer"
                onClick={() => setSelectedImage("/services/services5-images/image2.avif")}
              />
            </FadeIn>
          </div>

          <RelativeLinks/>
        </div>
      </div>

      <ImageLightbox
        src={selectedImage ?? ""}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default page;
