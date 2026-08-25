import About from "@/components/home/About";
import SubmitFeedback from "@/components/home/SubmitFeedback";
import Hero from "@/components/home/Hero";
import MajorProjects from "@/components/home/MajorProjects";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Image from "next/image";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="bg-[#D4D4D4] ">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 2xl:px-0">
          <About />
          <Services/>
          <WhyUs/>
          <MajorProjects/>
          <Reviews/>
          <SubmitFeedback/>
          <Contact/>
        </div>  
      </div>
    </div>
  );
}
