import "./navbar.scss"

import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom"

const navigationMenu = [
  "Inicio",
  "Para Michis",
  "Para Escalv@s",
  "Contacto",
  "Ingresar"
]
export const Navbar = () => {
  return (        


   <div className="navbar-container">
      <header className="">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
          <NavLink exact to="/"><p>Happy Caturdays</p></NavLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-i">
              <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="nav-active" exact to="/" >{navigationMenu[0]}</NavLink>                            
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="nav-active" to="/category/michis">{navigationMenu[1]}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="nav-active" to="/category/esclavxs">{navigationMenu[2]}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="nav-active" to="/contacto">{navigationMenu[3]}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="nav-active" to="/ingresar">{navigationMenu[4]}</NavLink>
                    </li>
              
              </ul>
            </div>
            <CartWidget />
          </div>
          
        </nav>
        
        </header>
    </div>
  );
};
