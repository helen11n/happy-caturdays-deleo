import { CartWidget } from "./CartWidget";

export const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <header className="navbar">
        <p>Happy Caturdays</p>
        <nav className="menu">
          <ul>
            <li className="nav-item">
              <a href="">{props.navigationMenu[0]}</a>
            </li>
            <li className="nav-item">
              <a href="">{props.navigationMenu[1]}</a>
            </li>
            <li className="nav-item">
              <a href="">{props.navigationMenu[2]}</a>
            </li>
            <li className="nav-item">
              <a href="">{props.navigationMenu[3]}</a>
            </li>
            <li className="nav-item">
              <a href="">{props.navigationMenu[4]}</a>
            </li>
          </ul>
        </nav>
        <CartWidget />
      </header>
    </div>
  );
};
