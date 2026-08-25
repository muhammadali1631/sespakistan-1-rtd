import ProjectShowcase from "@/components/project/ProjectShowcase";
import FixedImage from "@/components/services/FixedImage";
import React from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectShowcaseProps {
  id: number;
  mainImage: GalleryImage;
  title: string;
  content?: string[]; // bullet points — optional
  images: GalleryImage[];
}
const projects: ProjectShowcaseProps[] = [
  {
    id: 1,
    mainImage: { src: "/project/project-1/project-1.webp", alt: "Project 1" },
    title: "Ciklum Pakistan Private Limited",
    images: [
      { src: "/project/project-1/project-2.webp", alt: "Project 1" },
      { src: "/project/project-1/project-3.webp", alt: "Project 1" },
      { src: "/project/project-1/project-4.webp", alt: "Project 1" },
      { src: "/project/project-1/project-5.webp", alt: "Project 1" },
      { src: "/project/project-1/project-6.webp", alt: "Project 1" },
    ],
    content: [
      "Scope of Work: Complete office renovation and interior works for Ciklum Pakistan.",
      "Workspace Planning: Functional office space planning and design focused on efficiency and a modern professional working environment.",
      "MEP & Technical Systems: Complete electrical works and integrated MEP services to support smooth day-to-day operations.",
      "Interior Aesthetics: High-quality interior finishing and modern design elements to create a professional and functional workspace.",
      "Project Execution: Successfully executed with a focus on quality workmanship, functionality, and timely project completion.",
    ],
  },
  {
    id: 2,
    mainImage: { src: "/project/project-2/2project-1.webp", alt: "Project 2" },
    title: "Gold lion Pakistan Private Limited",
    images: [
      { src: "/project/project-2/2project-2.webp", alt: "Project 2" },
      { src: "/project/project-2/2project-3.webp", alt: "Project 2" },
      { src: "/project/project-2/project-3.webp", alt: "Project 2" },
      { src: "/project/project-2/project-4.webp", alt: "Project 2" },
      { src: "/project/project-2/2project-6.webp", alt: "Project 2" },
    ],
    content: [
      "Scope of Work: Complete office renovation and MEP works for Gold Lion.",
      "Workspace Planning: Functional office planning and renovation focused on creating an efficient and modern professional workspace.",
      "MEP & Technical Systems: Integrated HVAC, electrical, and complete MEP works with properly installed and coordinated systems.",
      "Interior Aesthetics: Modern interior renovation with a focus on quality finishes, functionality, and a professional office environment.",
      "Project Execution: Successfully delivered with a strong focus on quality workmanship, proper system integration, and reliable project execution.",
    ],
  },
  {
    id: 3,
    mainImage: { src: "/project/project-3/main-image.avif", alt: "Project 3" },
    title: "EDOTCO Pakistan Private Limited",
    images: [
      { src: "/project/project-3/project-1.avif", alt: "Project 3" },
      { src: "/project/project-3/project-2.avif", alt: "Project 3" },
      { src: "/project/project-3/project-3.avif", alt: "Project 3" },
      { src: "/project/project-3/project-4.avif", alt: "Project 3" },
      { src: "/project/project-3/project-5.webp", alt: "Project 3" },
    ],
    content: [
      "Scope of Work: Complete office renovation, interior designing, electrical, and HVAC works for EDOTCO Pakistan Private Limited.",
      "Workspace Planning: Comprehensive office renovation and interior design focused on creating a modern, functional, and professional workplace environment.",
      "MEP & Technical Systems: Electrical installations and HVAC-related works to ensure efficient, reliable, and properly integrated building services.",
      "Interior Aesthetics: Modern interior design and professional finishing with a focus on functionality, quality, and workplace appeal.",
      "Project Execution: Successfully delivered with a strong focus on quality workmanship, functionality, efficient building services, and professional finishing.",
    ],
  },
  {
    id: 4,
    mainImage: { src: "/project/project-4/project3.webp", alt: "Project 4" },
    title: "Pakistan Army",
    images: [
      { src: "/project/project-4/project1.avif", alt: "Project 4" },
      { src: "/project/project-4/project4.avif", alt: "Project 4" },
      { src: "/project/project-4/project5.avif", alt: "Project 4" },
      { src: "/project/project-4/project-2.avif", alt: "Project 4" },
      { src: "/general/office-new-1.avif", alt: "Project 4" },
    ],
    content: [
      "Scope of Work: Renovation and interior works for Pakistan Army at CMH Peshawar, Surgical Tower, 3rd Floor, along with redesigning and interior design work for Baral Café, Mangla Cantt.",
      "Workspace Planning: Well-organized space planning for CMH Peshawar focused on functionality and efficiency, along with a modern and functional café layout for Baral Café.",
      "MEP & Technical Systems: Related technical and supporting works carried out at CMH Peshawar to improve the functionality and overall performance of the facility.",
      "Interior Aesthetics: Complete interior renovation and finishing at CMH Peshawar, along with a modern, visually appealing, and contemporary interior design concept for Baral Café.",
      "Project Execution: Successfully completed both projects with a strong focus on quality workmanship, functionality, modern design, and professional standards.",
    ],
  },
  {
    id: 5,
    mainImage: { src: "/project/project-5/project-1.avif", alt: "Project 5" },
    title: "Package Units Uplifting and MEP Work at PM House Islamabad",
    images: [
      { src: "/project/project-5/project-2.avif", alt: "Project 5" },
      { src: "/project/project-5/project-3.avif", alt: "Project 5" },
      { src: "/project/project-5/project-4.avif", alt: "Project 5" },
      { src: "/project/project-5/project-5.avif", alt: "Project 5" },
      { src: "/project/project-5/project-6.avif", alt: "Project 5" },
    ],
    content: [
      "Consultant Samar Engineering Services (SES) uplifted all package units from the floor and placed them on an iron rack, while uplifting all plumbing lines on the roof.",
      "Electrical wires were securely hung on cable trays, ensuring proper organization and safety.",
      "Reinstalled all gas water geysers and completed the full MEP services, delivering a challenging yet successful project.",
    ],
  },
  {
    id: 6,
    mainImage: { src: "/project/project-6/project-1.webp", alt: "Project 6" },
    title: "ZONG CM PAK HQ – Asphalt Road Construction & Paving Work",
    images: [
      { src: "/project/project-6/project-2.webp", alt: "Project 6" },
      { src: "/project/project-6/project-3.webp", alt: "Project 6" },
      { src: "/project/project-6/project-4.webp", alt: "Project 6" },
      { src: "/project/project-6/project-5.webp", alt: "Project 6" },
      { src: "/project/project-6/project-6.webp", alt: "Project 6" },
    ],
    content: [
      "Scope of Work: Asphalt road construction and paving works at CM Park.",
      "Site Preparation: Complete surface preparation and leveling to establish a stable and properly graded road base.",
      "Road Construction: Professional asphalt laying to achieve a smooth, durable, and reliable road surface.",
      "Quality Standards: Construction work completed in accordance with required site specifications and quality standards.",
      "Project Execution: Successfully completed with a focus on durability, workmanship, proper site preparation, and finishing quality.",
    ],
  },
  // {
  //   id: 7,
  //   mainImage: { src: "/project/project-7/project-1.webp", alt: "Project 7" },
  //   title: "Baral Café – Mangla Cantt",
  //   images: [
  //     { src: "/project/project-7/project-2.webp", alt: "Project 7" },
  //     { src: "/project/project-7/project-3.webp", alt: "Project 7" },
  //     { src: "/project/project-7/project-4.webp", alt: "Project 7" },
  //     { src: "/project/project-7/project-5.webp", alt: "Project 7" },
  //     { src: "/project/project-7/project-6.webp", alt: "Project 7" },
  //   ],
  //   content: [
  //     "Scope of Work: Complete design and interior design concepts for Baral Café, Mangla Cantt.",
  //     "Space Planning: Well-planned café layout designed to ensure functionality, comfort, and efficient use of space.",
  //     "Design Concept: Modern and attractive interior design concept tailored to create a welcoming café environment.",
  //     "Interior Aesthetics: Contemporary design elements and finishes focused on creating a visually appealing and comfortable atmosphere.",
  //     "Project Execution: Successfully developed with a focus on functionality, modern aesthetics, and a cohesive overall design concept.",
  //   ],
  // },
  {
    id: 8,
    mainImage: { src: "/project/project-8/project-1.avif", alt: "Project 8" },
    title: "Huawei GSC Office Design & Build NSL Building 6 Complete Floors ",
    images: [
      { src: "/project/project-8/project-2.avif", alt: "Project 8" },
      { src: "/project/project-8/project-3.avif", alt: "Project 8" },
      { src: "/project/project-8/project-4.avif", alt: "Project 8" },
      { src: "/project/project-8/project-5.avif", alt: "Project 8" },
      { src: "/project/project-8/project-6.avif", alt: "Project 8" },
    ],
    content: [
      "Scope of Work: Full interior design and build solution for 6 complete office floors at NSL Building, Islamabad.",
      "Workspace Planning: Smart open-plan layouts, collaborative spaces, executive offices, and flexible meeting zones.",
      "MEP & Technical Systems: Integrated HVAC, electrical, networking, fire safety, and plumbing systems to support operations.",
      "Interior Aesthetics: Contemporary design with ergonomic furniture, acoustic treatments, custom partitions, and vibrant locker/storage units.",
      "Project Execution: Delivered as a turnkey solution, covering design, procurement, fit-out, and final commissioning.",
    ],
  },
  {
    id: 9,
    mainImage: { src: "/project/project-9/project-1.avif", alt: "Project 9" },
    title: "Teradata Pakistan Private Limited ",
    images: [
      { src: "/project/project-9/project-2.avif", alt: "Project 9" },
      { src: "/project/project-9/project-3.avif", alt: "Project 9" },
      { src: "/project/project-9/project-4.avif", alt: "Project 9" },
      { src: "/project/project-9/project-5.avif", alt: "Project 9" },
      { src: "/project/project-9/project-6.avif", alt: "Project 0" },
    ],
    content: [
      "Scope of Work: Complete HVAC works, interior renovation, and room development for the 2nd & 3rd Floor of Telecom Foundation Building, G-9, Islamabad.",
      "Workspace Planning: Development of functional and professional workspaces, including the construction and planning of an HR Room and a Silent Room.",
      "MEP & Technical Systems: Complete HVAC works to ensure efficient and reliable climate control throughout the designated areas.",
      "Interior Aesthetics: Complete interior renovation and finishing works focused on creating a modern, comfortable, and professional workspace environment.",
      "Project Execution: Successfully completed the renovation, room development, HVAC, and finishing works with a focus on quality, functionality, and professional standards.",
    ],
  },
];

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      <FixedImage imageUrl="/project/hero.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <h3 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl text-center px-4">
          Transforming Ideas into Landmark Projects
        </h3>
      </div>
      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto ">
          <h5 className="text-black font-semibold text-center text-lg sm:text-xl lg:text-2xl px-5 sm:px-10 py-3">
            From concept to completion, Samar Engineering (SES) presents landmark
            projects across infrastructure, healthcare, and industry.
          </h5>
          <h4 className="text-center text-2xl sm:text-3xl lg:text-5xl font-semibold py-3">
            Our Projects
          </h4>
          <p className="text-center py-3 px-5">
            Samar Engineering (SES) has successfully delivered projects across
            commercial, industrial, healthcare, and infrastructure
            sectors. Here are some of our highlighted works
          </p>
          {projects.map((project, idx) => (
            <ProjectShowcase data={project} id={project.id} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
