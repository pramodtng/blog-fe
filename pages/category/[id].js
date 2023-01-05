import React from 'react'
import { PostCard, Categories, Loader } from '../../components';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';



const CategoryPost = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
    <Head>
      <title>Categories</title>
    </Head>
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            {data.data.length > 0 ? data.data.map((post) => (
              <PostCard key={post.id} post={post} />
            )) :
              <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 flex items-center'>
                <Image
                  src='/404.gif'
                  alt='not-found'
                  height={400}
                  width={400} />
                <h2 className='text-2xl'>No Posts available!</h2>
              </div>
            }
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default CategoryPost

export async function getStaticProps({ params }) {
  const post = await fetch(`https://blogspotbackend.tashicell.com/api/categories/${params.id}?populate=deep`)
  const posts = await post.json()
  return {
    props: {
      data: posts.data.attributes.posts
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const posts = await fetch('https://blogspotbackend.tashicell.com/api/categories?populate=deep')
  const res = await posts.json()
  const paths = res.data.map((post) => {
    return {
      params: { id: post.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}