import AimObject from "@/components/about/AimObject";
import Content from "@/components/about/Content";
import OurLocation from "@/components/about/OurLocation";
import DoubleImages from "@/components/DoubleImages";
import FixedImage from "@/components/services/FixedImage";
import React from "react";

const page = () => {
  return (
    <div className="mt-20 lg:mt-36">
      {/* Hero Image Banner  */}
      <FixedImage imageUrl="/about/main.avif" />
      <div className="h-[90vh] flex items-center justify-center w-full bg-black/50 ">
        <h3 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl uppercase text-center px-4">About Us</h3>
      </div>

      <div className="bg-[#D4D4D4]">
        <div className="max-w-[1200px] mx-auto py-10">
          {/* Double Images */}
          <DoubleImages
            image1="/home/major-project/new-image7.avif"
            image2="/about/doubleimage2.avif"
          />

          <Content/>
          <AimObject/>
          <OurLocation/>

        </div>
      </div>
    </div>
  );
};

export default page;
