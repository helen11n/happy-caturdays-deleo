import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom"

export const Navbar = (props) => {
  return (                                                                                                                                                                                       
    <div className="navbar-container">
      <header className="navbar">
      <Link to="/"><p>Happy Caturdays</p></Link>
        <nav className="menu">
          <ul>
            <li className="nav-item">
              <Link to="/">{props.navigationMenu[0]}</Link>                            
            </li>
            <li className="nav-item">
              <Link >{props.navigationMenu[1]}</Link>
            </li>
            <li className="nav-item">
              <Link >{props.navigationMenu[2]}</Link>
            </li>
            <li className="nav-item">
              <Link >{props.navigationMenu[3]}</Link>
            </li>
            <li className="nav-item">
              <Link >{props.navigationMenu[4]}</Link>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};
