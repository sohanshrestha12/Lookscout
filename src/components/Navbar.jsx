import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "./Logo";

const Navbar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className={props.isWideScreen ? "container" : "container-fluid"}>
        <a className="navbar-brand" href="#">
          <Logo />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Our Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link" aria-current="page" >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-4">
            <a className="text-primary text-decoration-none">Sign Up</a>
            <a className="btn btn-primary">Log In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  isWideScreen: PropTypes.bool.isRequired,
};

export default Navbar;
