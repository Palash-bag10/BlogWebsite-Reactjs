import React from 'react'
import { NavLink } from 'react-router-dom'
import "./BlogDetails.css"

export default function BlogDetails({post}) {
  return (
    <>
     <div className=' blog__card border border-black bg-[#F1F6F9] p-4'>
        <NavLink to={`/blog/${post.id}`}>
            <span
            className=' blog__title text-xl text-[#212A3E] font-bold hover: transition-all duration-200'
            >{post.title}</span>
        </NavLink>
        <p className=' my-[5px]'>
            by
            <span className=' italic text-[#9BA4B5]'> {post.author} </span>
            on 
            <NavLink to={`/categories/${post.category.replaceAll("-"," ")}`}>
                <span className='blog__category font-bold text-sm text-[#212A3E]'> {post.category} </span>
            </NavLink>
        </p>
        <p className='text-[#212A3E]'>Posted on {post.date}</p>
        <p className='text-[#394867] text-justify my-4'> {post.content} </p>
        <div className=' flex flex-wrap'>
            {
                post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll("-"," ")}`}>
                        <span className='blog__tag text-[#212A3E] font-bold text-xs underline mr-2 '>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>
     </div> 
    </>
  )
}
