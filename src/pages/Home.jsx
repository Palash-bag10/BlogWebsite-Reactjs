import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

export default function Home() {
  return (
    <>
      <div>
        <Header/>
        <div className=' max-w-[720px] mx-auto py-24 px-[25px]'>
            <Blogs/>
        </div>
            <Pagination/>
      </div>
    </>
  )
}
