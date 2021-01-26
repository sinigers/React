const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "red"
                    
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;