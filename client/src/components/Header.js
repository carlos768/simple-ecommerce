import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <nav>
        <div className="logo">
        <h2>Nombre</h2>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="/admin">admin</Link></li>
            </ul>
        </div>
        <div className="nav-user">
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
    )
}

export default Header