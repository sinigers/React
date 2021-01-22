import './App.css';

function App() {
    const title = 'Text as variable';
    const likes = 50;
    const link = 'http://www.google.com';
    return ( <
        div className = "App" >
        <
        div className = "content" >
        <
        h1 > { title } < /h1>   <
        p > Liked { likes }
        time < /p> <
        a href = "www.google.com" > Google site < /a>  <
        a href = { link } > < /a>< /
        div > <
        /div>
    );
}

export default App;