import { NavLink } from "react-router-dom";
import logo from '../images/logo_no_back.png';
export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/bio">About</NavLink></li>
        
        <li><NavLink to="/shows">Releases</NavLink></li>
        {/* <li><NavLink to="/media">Media</NavLink></li>
        <li><NavLink to="/photos">Gallery</NavLink></li> */}
        
        <li><NavLink to="/merch">Merch</NavLink></li>
        
        <li><NavLink to="/contact">Bookings</NavLink></li>
      </ul>
    </nav>
  );
}