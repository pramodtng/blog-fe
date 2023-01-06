import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment/moment'

const FeaturedPostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="relative mx-6 h-72 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer">
        <div className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72'
          style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.image.data.attributes.url}')` }} />
        <div className='absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72' />
        <div className='flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full'>
          <p className='text-white mb-4 text-shadow font-semibold text-xs'>{moment(post.attributes.createdAt).format('MMM DD, YYYY')}</p>
          <p className='text-white mb-4 text-shadow font-semibold text-1xl text-center'> {post.attributes.title} </p>
          <div className='flex items-center absolute bottom-5 w-full justify-center'>
            <Image
              unoptimized
              src={`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.writer.data.attributes.image.data.attributes.url}`}
              alt="image-description"
              height={30}
              width={30}
              className='align-middle drop-shadow-lg rounded-full'
            />
            <p className="inline align-middle text-white text-shadow ml-2 font-medium"> {post.attributes.writer.data.attributes.name} </p>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default FeaturedPostCard