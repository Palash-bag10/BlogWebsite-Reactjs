import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";
import CategoryPage from "./pages/CategoryPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import './App.css'

export default function App() {

  const {fetchBlogPostsData} = useContext (AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const pageCount = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      // Show tag page
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPostsData(Number(pageCount), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPostsData(Number(pageCount), null, category)
    }
    else{
      fetchBlogPostsData(Number(pageCount));
    }
  }, [location.pathname, location.search] )

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/blog/:blogId" element={<BlogPage/>}  />
        <Route path="/tags/:tag" element={<TagPage/>}  />
        <Route path="/categories/:category" element={<CategoryPage/>}  />
      </Routes>

    </>
  );
}
