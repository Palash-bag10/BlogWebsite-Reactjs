import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [allPost, setAllPost] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [totalPageCount, setTotalPageCount] = useState(null)

    const navigation = useNavigate();


    // Fill the pending Data
    //fetch blog data
    async function fetchBlogPostsData(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        console.log(url)

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPageCount(data.page);
            setAllPost(data.posts);
            setTotalPageCount(data.totalPages);
        }
        catch(error){
            alert("Fetch Data is Error");
            setPageCount(1);
            setAllPost([]);
            setTotalPageCount(null);
        }

        setLoading(false);
    }

    // Handle when next page and previous page buttons are clicked
    function changePageHandler(pageCount){
        navigation({search: `?page=${pageCount}`})
        setPageCount(pageCount);       
    }

    const value = {
        loading,
        setLoading,
        allPost,
        setAllPost,
        pageCount,
        setPageCount,
        totalPageCount,
        setTotalPageCount,
        fetchBlogPostsData,
        changePageHandler
    };

    return (<AppContext.Provider value = {value} >
        {children}
    </AppContext.Provider>)
}

export default AppContextProvider;
