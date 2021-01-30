const BlogList = ({blogs, title, handleDelite}) => {


    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                    <button onClick={()=> handleDelite(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;