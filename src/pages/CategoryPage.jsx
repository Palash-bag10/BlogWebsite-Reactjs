import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import './CategoryPage.css'

export default function CategoryPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <>
    <div className=' py-24'>
       <Header/>
       <div className='max-w-[720px] px-[25px] mx-auto'>
          <div className=' flex flex-wrap items-center gap-3 mb-8'>
              <button 
              className='categorypage__button border border-black rounded-md px-3 py-1 '
              onClick={() => navigation(-1) }>Back</button>
              <h2 >Blogs On <span className=' font-bold'>{category}</span></h2>
          </div>
        <Blogs/>
       </div>
       <Pagination/>
    </div> 
   </>
  )
}
