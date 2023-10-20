import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav_elements">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar;

