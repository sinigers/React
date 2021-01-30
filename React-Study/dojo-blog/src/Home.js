import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource"); //izpisva, kogato data ot servera ne suvpada sus zaiavkata
        }

        return res.json();
      })
      .then((data) => {
        setBlogs(data); //zadava state na blogs s informaciata ot data -jsona
        setIsPending(false); //predi dase zaredi zaiavkata ot servera shte pokazva loading
        setError(null); // ako zaiavkata e OK err e Null
      })
      .catch((err) => {
        setIsPending(false); // kogato ima err state na IsPending e false - ne se pokazva "loading"
        setError(err.massage);
      });
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
