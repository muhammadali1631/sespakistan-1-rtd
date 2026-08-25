import Image from 'next/image'
import React from 'react'

const FixedImage = ({imageUrl}: {imageUrl:string}) => {
  return (
    <Image
            src={imageUrl}
            alt="Main Image"
            height={600}
            width={1000}
            className="fixed -z-10 h-full object-cover w-full top-20 lg:top-36 left-0"
          />
  )
}

export default FixedImage