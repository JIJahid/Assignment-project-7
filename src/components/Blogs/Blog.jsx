import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {
    const [blogs , setBlogs] = useState([ ]);

    useEffect( () =>{
            fetch('data.json')
            .then(res => res.json())
            .then (data => setBlogs(data))
    },[])

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default Blog;