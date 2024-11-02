import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <NavLink to="/Giftos" className="navbar-brand">GIFTOS</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-3">
                    <li className="nav-item">
                    <NavLink to="/Giftos" className="nav-link" aria-current="page">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/Giftos/shop" className="nav-link">SHOP</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/Giftos/why-us" className="nav-link">WHY US</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/Giftos/contact-us" className="nav-link">CONTACT US</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header