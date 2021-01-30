import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario'); // 

    const handleDelite = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); //ako blog id savpada s handleDelete id
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use Effect');
        console.log(name);
    }, []); // [] izpulniava funkciata samo pri purvoto rendvane;
    //[name] izpulniava funkciata samo pri promqna na name ot const [name, setName]=useState('mario');
    // ako niama [] izpulniava funkciata pri vsiako rendvane;

    return ( <
        div className = "home" >
        <
        BlogList blogs = { blogs }
        title = "All blogs"
        handleDelite = { handleDelite }
        /> <
        button onClick = {
            () => setName('Alex') } > Change name < /button> <
        p > { name } < /p> <
        /div>
    );
}

export default Home;