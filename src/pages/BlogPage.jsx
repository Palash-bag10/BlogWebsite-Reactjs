import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import './BlogPage.css'

export default function BlogPage() {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const navigation = useNavigate();
    const location = useLocation();

    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogsData() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log(url)
        try{
            const response = await fetch(url);
            const data = await response.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)
        }
        catch(error){
            alert("Error Blog Id");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId){
            fetchRelatedBlogsData();
        }
    }, [location.pathname])

  return (
    <>
      <div className=' py-24 max-w-2xl mx-auto'>
        <Header/>
        <div className=' max-w-[720px] px-[25px]'>
            <div>
                <button 
                className=' blogpage__button border border-black rounded-md px-3 py-1 mb-6'
                onClick={() => navigation(-1)}>Back</button>
            </div>

        {
            loading ? <Spinner/> : 
            
                blog ? 
                ( <div className=' flex flex-col gap-y-10'>
                    <BlogDetails post = {blog}/>
                    <h2 className=' text-2xl font-bold text-[#EB455F]'>Related Blogs</h2>
                    {
                        relatedBlogs.map( (post) => (
                            <div key={post.id}>
                                <BlogDetails post = {post}/>
                            </div>
                        ))
                    }
                </div> ) 
                : 
                (<div className=' min-h-[80vh] w-full flex justify-center items-center'>
                    <p className=' text-center font-bold text-2xl capitalize'>no post found</p>
                </div>)             
        }
        </div>
      </div>
    </>
  )
}
