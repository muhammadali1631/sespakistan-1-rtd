import ProfileSection from "@/components/client/ProfileSection";
import ImageBanner from "@/components/services/ImageBanner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen mt-20 lg:mt-36 bg-[#D4D4D4]">
      <div className="max-w-[1200px] mx-auto ">
        <ImageBanner
          IMAGE_URL="/profile/banner.avif"
          text="CORPORATE PROFILE"
        />
        <Link
          href={"/SES_Engineering_Profile_11MBs.pdf"}
          download
          className="block text-lg sm:text-xl lg:text-3xl text-center underline px-5 py-4"
        >
          Download Samar Engineering Services (SES) Profile in PDF
        </Link>
        <div className="flex justify-center py-6">
          <Link href="/SES_Engineering_Profile_11MBs.pdf" target="_blank">
            <Image
              src="/general/pdf.avif"
              alt="PDF"
              width={500}
              height={700}
              className="w-96 h-auto object-contain"
              priority
            />
          </Link>
        </div>
        <ProfileSection />
      </div>
    </div>
  );
};

export default page;
