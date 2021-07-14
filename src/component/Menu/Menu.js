import "./Menu.scss";
import logo from "../../images/logo.svg";
import { useState } from "react";

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="Menu">
      <h1>
        <img src={logo} alt="logo-loopstudios" />
      </h1>
      <div className="logo-menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className={`navigation ${toggleMenu ? "active" : "hidden"}`}>
        <div className="nav-menu-open">
          <img src={logo} alt="logo-loopstudios" />
          <div className="close-logo-menu" onClick={() => setToggleMenu(!toggleMenu)}>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
              fill="#fff"
              fillRule="evenodd"/>
            </svg>
          </div>
        </div>
        <ul className="links">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
