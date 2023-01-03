/* eslint-disable @next/next/no-img-element */
import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.image.data.attributes.url}`}
          alt='post-describtion'
          className='object-top absolute object-cover shadow-lg rounded-t-lg lg:rounded-lg w-full'
        />
      </div>
      <h1 className='transition duration-700 text-center mb-6 cursor-pointer hover:text-pink-600 text-2xl font-semibold'>
        <Link href={`/post/${post.id}`}>
          {post.attributes.title}
        </Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-start mb-4 w-full'>
        <div className='flex items-center justify-center lg:mb-0 w-full lg:w-auto mr-8'>
          <Image
            unoptimized
            src={`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.writer.data.attributes.image.data.attributes.url}`}
            alt="image-description"
            height={40}
            width={40}
            className='align-middle drop-shadow-lg rounded-full'
          />
          <h4 className='inline align-middle text-gray-700 ml-2 text-lg'> {post.attributes.writer.data.attributes.name} </h4>
        </div>
        <div className='font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span> {moment(post.attributes.createdAt).format("MM DD, YYYY")} </span>
        </div>
      </div>
      <p className='text-left text-lg text-gray-700 font-normal px-4 lg:px-4 mb-6'>
        {post.attributes.excerpt}
      </p>
      <div className='text-right'>
        <Link href={`/post/${post.id}`}>
          <span className='transition duration-500 transform hover:translate-y-1 inline-block bg-pink-600 text-lg rounded-full font-medium text-white px-7 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard