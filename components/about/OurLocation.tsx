"use client";

import React from 'react'
import FadeIn from '../motion/FadeIn'

const OurLocation = () => {
  return (
    <section className=" px-6 py-16 md:px-10">
      <div className="mx-auto flex flex-col md:flex-row items-start md:items-center max-w-6xl gap-10 md:gap-14">

        {/* Google Map */}
        <FadeIn direction="left" className="h-[320px] sm:h-[420px] w-full md:w-[600px] overflow-hidden">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps?q=Office%20%232%20Haroon%20Plaza%202nd%20Floor%20IJP%20Road%20Near%20PSO%20Pump%20I-9%20Islamabad&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>

        {/* Location Details */}
        <FadeIn direction="right" className="flex flex-col justify-center">
          <h2 className="mb-6 md:mb-14 text-2xl sm:text-3xl md:text-5xl font-bold text-[#071a2f]">
            Our Location
          </h2>

          <div className="space-y-7">
            {/* Address */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-black">
                Address
              </h3>

              <p className="max-w-md text-[15px] leading-6 text-gray-600">
                Office # 2 Haroon Plaza 2nd Floor IJP Road
                <br />
                Near PSO PUMP | I-9 Islamabad
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-black">
                Hours
              </h3>

              <p className="text-[15px] text-gray-600">
                10 AM - 7 PM
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};


export default OurLocation
