/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import moment from 'moment/moment'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const BlogDetail = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img src={`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.image.data.attributes.url}`} alt={post.title} className='object-top h-full w-full rounded-t-lg' />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center mb-4 w-full'>
          <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <Image
              src= {`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.writer.data.attributes.image.data.attributes.url}`}
              alt='author-imag'
              height={60}
              width={60}
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'> {post.attributes.writer.data.attributes.name} </p>
          </div>
          <div className='font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span> {moment(post.attributes.createdAt).format("MM DD, YYYY")} </span>
          </div>
        </div>
        <p className='mb-8 text-3xl font-semibold text-black'> {post.attributes.title} </p>
        <div className='text-black text-1xl'>
          <ReactMarkdown children= {post.attributes.content} rehypePlugins={[rehypeRaw]} />
        </div>
      </div>
    </div>
  )
}

export default BlogDetail