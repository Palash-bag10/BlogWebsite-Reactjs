import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

export default function Blogs() {

    const {allPost, loading} = useContext(AppContext);
    console.log(allPost)

  return (
    <>
     <div className=' max-w-2xl flex flex-col justify-center items-center gap-y-7 mx-auto '>
        {
            loading ? 

            (<Spinner/>) : 
            
                allPost.length === 0 ? 
                ( <div className=' min-h-[80vh] w-full flex justify-center items-center'>
                    <p className=' text-center font-bold text-2xl'>No Post Available</p>
                </div> ) 
                :
                (allPost.map ( (post) => (
                    <BlogDetails key={post.id} post={post} />
                 ) ) 
            )
        }
     </div> 
    </>
  )
}
