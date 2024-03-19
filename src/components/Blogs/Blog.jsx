import { useEffect } from "react";
import { useState } from "react";
import Blogdata from "../Blogdata/Blogdata";
import PropTypes from 'prop-types'
import './BlogStyle.css'

const Blog = ({handleAddToCart}) => {
    const [blogs , setBlogs] = useState([ ]);

    useEffect( () =>{
            fetch('data.json')
            .then(res => res.json())
            .then (data => setBlogs(data))
    },[])

    return (
        <div className="md:w-[65%]  flex justify-center  ">
                <div className="
                  w-full ">
                        <div className=" blog">
                        {
                        blogs.map(blog => <Blogdata key={blog.id}  blog={blog}  
                            handleAddToCart={handleAddToCart}></Blogdata>)
                        }
                        </div>
                </div>
                
        </div>
    );
};

Blog.propTypes = {
    handleAddToCart: PropTypes.func
}

export default Blog;