import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data); //zadava stage na blogs s informaciata ot data -jsona
        setIsPending(false); //predi dase zaredi zaiavkata ot servera shte pokazva loading
      });
  }, []);
  return (
    <div className="home">
      {isPending && <div>Loading...</div>} 
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
