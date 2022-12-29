import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { getFeaturedPosts } from '../services';
import { FeaturedPostCard } from './../components';

const FeaturedPosts = ({ title }) => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result.posts.data);
      setDataLoaded(true);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='mb-8 bg-white shadow-lg rounded-lg p-8'>
      <h2 className='text-2xl mb-4 ml-4 text-black font-semibold'>
        {title}
      </h2>
      <Slider {...settings}>
        {
          dataLoaded && featuredPosts.map((post) => <FeaturedPostCard post={post} key={post.id} />)
        }
      </Slider>
    </div>
  )
}

export default FeaturedPosts