import "./Header.css";
import logo from '../../assets/images/logo.png';
import NavItem, { NavItemDropDown } from "../../components/NavItem/NavItem";
import { Link } from "react-router-dom";



const Header = (props) => {
  return <>
      <div className="header navbar navbar-expand-md navbar-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem><Link to="/" className="nav-link">Home</Link></NavItem> 
                    <NavItem><Link to="/#" className="nav-link">Browsers</Link></NavItem> 
                    <NavItemDropDown>
                        <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/#" className="dropdown-item">Fortnite</Link></li>
                            <li><Link to="/#" className="dropdown-item">Call of Duty</Link></li>
                        </ul>
                    </NavItemDropDown>
                    <li className="nav-item"><Link to="/#" className="nav-link">Streams</Link></li>
                    <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                </ul>
            </div>
        </div>
    </div>
    </>
};

export default Header;
