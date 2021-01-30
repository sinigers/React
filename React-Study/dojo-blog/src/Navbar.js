import {Link} from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                
                {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;