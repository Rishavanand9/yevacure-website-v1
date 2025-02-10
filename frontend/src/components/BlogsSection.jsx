import React from 'react'
import blogsData from '../data/blogs.json'

const BlogsSection = () => {
  console.log()
  return (
    <section className='section__container blog__container'>
        <h2>Latest from Blogs</h2>
        <p className='section__subHeader'>Skbskfbdsih kjdsbdah hodsaihfa hadoh hdaoidhdsa oihdason n</p>
        <div className='grid grid-cols-2 gap-2.5 p-6 justify-center'>
            {blogsData.map((blog, index) => {
              return (<div key={index} className='blog__card__content cursor-pointer hover:scale:105 transition=-all duration-300'>
                <img src={blog.imageUrl} alt="blog image" />
                <div className='blog__card__content'>
                    <h6>{blog.subtitle}</h6>
                    <h4>{blog.title}</h4>
                    <p>{blog.date}</p>
                </div>
              </div>)   
            })}
        </div>
    </section>
  )
}

export default BlogsSection
