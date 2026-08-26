"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import FadeIn from "../motion/FadeIn";
import StaggerContainer, { StaggerItem } from "../motion/StaggerContainer";
import ImageLightbox from "../ui/ImageLightbox";


interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectShowcaseProps {
  mainImage: GalleryImage;
  title: string;
  content?: string[];
  images: GalleryImage[];
}

const ProjectShowcase = ({
  data,
  id,
}: {
  data: ProjectShowcaseProps;
  id: number;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className={`w-full  p-6 sm:p-8 ${id !== 9 && "border-b-4 border-[#033268]"}`}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Main image */}
        <FadeIn direction="left" className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-lg md:order-1 cursor-pointer" >
          <Image
            src={data.mainImage.src}
            onClick={() => setSelectedImage(data.mainImage.src)}
            alt={data.mainImage.alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </FadeIn>

        {/* Title + content */}
        <FadeIn direction="right" className="order-2 md:order-2">
          <h2 className="text-lg font-bold text-slate-900 pt-5 sm:text-3xl">
            {data.title}
          </h2>
          {/* {id === 8 &&
          <h4 className="text-sm font-semibold text-slate-900 pt-5 sm:text-xl">
            Project works executed through appointed main contractor
          </h4>} */}
          {id === 9 &&
          <h4 className="text-sm font-semibold text-slate-900 pt-5 sm:text-xl">
            Telecom Foundation Building, 2nd & 3rd Floor, G-9, Islamabad
          </h4>}

          {data.content && data.content.length > 0 && (
            <StaggerContainer staggerDelay={0.08} className="mt-3 list-disc space-y-2 pl-5 text-sm ">
              {data.content.map((item, i) => {
                const [title, ...description] = item.split(":");

                return (
                  <StaggerItem key={i}>
                      <li className="text-gray-600 ">
                        <strong className="font-semibold text-gray-900">
                          {title}:
                        </strong>{" "}
                        {description.join(":")}
                      </li>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </FadeIn>

        {/* Gallery */}
        <StaggerContainer staggerDelay={0.06} className="order-3 grid grid-cols-3 gap-2 sm:grid-cols-4 md:order-3 md:col-span-2 md:grid-cols-5">
          {data.images.map((img, i) => (
            <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative aspect-square w-full overflow-hidden rounded-md cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 14vw, 25vw"
                  />
                </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <ImageLightbox
        src={selectedImage ?? ""}
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default ProjectShowcase;
