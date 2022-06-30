import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Movie Bookshop</h1>
            <div className="link">
                <Link to="/">Home</Link>
                {/* <Link to="/charaters">Characters</Link> */}
            </div>
        </nav>
    );

}
export default Navbar;