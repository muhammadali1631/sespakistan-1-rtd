"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";


type CardProp = {
    name: string;
    image:string;
    link: string;
}


const ImageCard = ({Card}: {Card:CardProp}) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex relative w-[400px] justify-center  p-6"
    >
      <div className="w-full max-w-xs overflow-hidden rounded-4xl ">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image
      src={Card.image}
      alt="Office space planning"
      width={800}
      height={600}
      quality={100}
      className="h-80 w-full object-cover"
    />
        </motion.div>

        <div className="p-4 absolute -bottom-4 w-full left-0 flex justify-center">
          <Link
            href={`/services${Card.link}`}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="block rounded-full bg-[#0D335E] px-6 py-6 text-center text-sm sm:text-lg sm:font-semibold text-white transition hover:bg-blue-800"
            >
              {Card.name}
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageCard;
