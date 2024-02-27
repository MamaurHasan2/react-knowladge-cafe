import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res=> res.json())
        .then (data => setBlogs (data))
        
    },[]);


    return (
        <div className="md:w-2/3">

            <h3>Show All Blogs Countity: {blogs.length}</h3>

            
        </div>
    );
};

export default Blogs;