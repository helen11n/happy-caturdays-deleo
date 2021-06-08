import "./navbar.scss"

import { CartWidget } from "./CartWidget"
import { NavLink } from "react-router-dom"

const navigationMenu = [
  "Inicio",
  "Para Michis",
  "Para Esclav@s"
]
export const Navbar = () => {
  return (        

   
   <div className="navbar-container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <div className="brand">
             <NavLink exact to="/" ><p>Happy Caturdays</p></NavLink>
            </div>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav navbar-i me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                      <NavLink className="navlink" activeClassName="nav-active" exact to="/" >{navigationMenu[0]}</NavLink>                            
                    </li>
                    <li className="nav-item">
                      <NavLink className="navlink" activeClassName="nav-active" to="/category/michis">{navigationMenu[1]}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="navlink" activeClassName="nav-active" to="/category/esclavxs">{navigationMenu[2]}</NavLink>
                    </li>
                  
              </ul>
            </div>
            <CartWidget />
          </div>
          
        </nav>
       
    </div>
  );
};
