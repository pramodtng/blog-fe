import React, { useState, useEffect } from 'react'
import { getCategories } from '../services';
import Link from 'next/link';

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data.categories.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {
        categories.map(category => {
          return (
            <Link href={`/category/${category.id}`} key={category.id}>
              <span className='cursor-pointer block mb-3 pb-3 hover:underline'>
                {category.attributes.name}
              </span>
            </Link>
          );
        })
      }
    </div>
  )
}

export default Categories


