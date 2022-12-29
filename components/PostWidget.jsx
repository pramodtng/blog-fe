import React, { useState, useEffect } from 'react'
import { getRecentPosts } from '../services';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment/moment';


const PostWidget = () => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    getRecentPosts().then((result) => {
      setRelatedPosts(result.posts.data);
    });
  }, [])
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Recent Post
      </h3>
      {
        relatedPosts.map(post => {
          return(
            <div key={post.id} className = 'flex items-center w-full mb-4' >
              <div className='w-16 flex-none'>
                  <Image 
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API + post.attributes.image.data.attributes.url}`}
                    alt = 'author-image'
                    height={50}
                    width={50}
                    className = 'rounded-full'
                  />
              </div>
              <div className='flex-grow ml-4'>
                <p className='text-gray-500 font-xs'> {moment(post.attributes.createdAt).format('MMMM DD, YYYY')} </p>
                <Link href={`/post/${post.id}`} key={post.id} className='text-md'>
                  {post.attributes.title}
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PostWidget