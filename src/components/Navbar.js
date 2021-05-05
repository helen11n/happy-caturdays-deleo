import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom"

export const Navbar = (props) => {
  return (                                                                                                                                                                                       
    <div className="navbar-container">
      <header className="navbar">
      <Link exact to={"/"}><p>Happy Caturdays</p></Link>
        <nav className="menu">
          <ul>
            <li className="nav-item">
              <Link exact to={"/"} >{props.navigationMenu[0]}</Link>                            
            </li>
            <li className="nav-item">
              <Link to={"/category/michis"}>{props.navigationMenu[1]}</Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/esclavxs"}>{props.navigationMenu[2]}</Link>
            </li>
            <li className="nav-item">
              <Link >{props.navigationMenu[3]}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link"  >{props.navigationMenu[4]}</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};
