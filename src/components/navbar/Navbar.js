import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom"

export const Navbar = (props) => {
  return (                                                                                                                                                                                       
    <div className="navbar-container">
      <header className="navbar">
      <NavLink exact to="/"><p>Happy Caturdays</p></NavLink>
        <nav className="menu">
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-active" exact to="/" >{props.navigationMenu[0]}</NavLink>                            
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-active" to="/category/michis">{props.navigationMenu[1]}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-active" to="/category/esclavxs">{props.navigationMenu[2]}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-active" to="/contacto">{props.navigationMenu[3]}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="nav-active" to="/ingresar">{props.navigationMenu[4]}</NavLink>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};
