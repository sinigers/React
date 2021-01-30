import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data) //zadava stage na blogs s informaciata ot data -jsona
            });
    }, []);
    return (
      <div className="home">
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
      </div>
    );
}

export default Home;