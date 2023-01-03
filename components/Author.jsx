import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative bg-white rounded-lg shadow-lg'>
      <div className='absolute left-0 right-2 -top-6'>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API + author.attributes.writer.data.attributes.image.data.attributes.url}`}
          alt='author-image'
          height={40}
          width= {40}
          className='inline align-middle rounded-full bg-black  border-black'
        />
        <h3 className='text-black'> {author.attributes.writer.data.attributes.name} </h3>
        <h4 className='text-lg text-black'> {author.attributes.writer.data.attributes.bio} </h4>
      </div>
    </div>
  )
}

export default Author