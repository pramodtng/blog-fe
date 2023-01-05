import React from 'react'
import { useRouter } from 'next/router';
import { PostWidget, Categories, Author, BlogDetail, Loader } from '../../components';
import { DiscussionEmbed } from "disqus-react"
import Head from 'next/head';


const Posts = ({ post }) => {
  const disqusShortname = "BlogSpot"
  const disqusConfig = {
    url: `https://blog.tashicell.com/post/${post.id}`,
    identifier: `${post.id}`,
    title: `${post.attributes.title}`
  }
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }


  return (
    <>
      <Head>
        <title>{post.attributes.title}</title>
      </Head>
      <div className='container mx-auto px-10 pb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1 text-white'>
            <BlogDetail post={post} />
            <Author author={post} />
            <div>
              <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
              />
            </div>
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Posts

export async function getStaticProps({ params }) {
  const posts = await fetch(`https://blogspotbackend.tashicell.com/api/posts/${params.id}?populate=deep`)
  const res = await posts.json()
  return {
    props: {
      post: res.data
    },
    revalidate: 60
  }
}


export async function getStaticPaths() {
  const posts = await fetch('https://blogspotbackend.tashicell.com/api/posts?populate=deep')
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