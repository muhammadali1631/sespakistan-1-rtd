"use client";

import Image from 'next/image'
import React from 'react'
import FadeIn from './motion/FadeIn'

const DoubleImages = ({image1, image2}: {image1: string, image2: string}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-6 my-10 px-5 sm:px-8 lg:px-0'>
        <FadeIn direction="left">
            <Image src={image1} alt='Image' width={500} height={500} className='object-cover rounded-3xl h-[320px] sm:h-[420px] lg:h-[500px] w-full lg:w-[550px]'/>
        </FadeIn>
        <FadeIn direction="right">
            <Image src={image2} alt='Image' width={500} height={500} className='object-cover rounded-3xl h-[320px] sm:h-[420px] lg:h-[500px] w-full lg:w-[550px]'/>
        </FadeIn>
    </div>
  )
}

export default DoubleImages
