import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import './TagPage.css'

export default function TagPage() {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

  return (
    <>
     <div >
        <Header/>
        <div className='py-24 max-w-[720px] px-[25px] mx-auto'>
            <div  className='mb-8 flex items-center gap-3'>     
                <button
                className=' tagpage__button border border-black rounded-md px-3 py-1'
                onClick={() => navigation(-1) }>Back</button>
                <h2>Blogs Tagged <span className=' font-bold'>#{tag}</span></h2>
            </div>
          <Blogs/>
        </div>
        <Pagination/>
     </div> 
    </>
  )
}
