import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="heading d-flex grow-shrink-basis align-center header">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <h1 className="heading-title">Apparrel Store</h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <Link to="#" className="link cursor">
              <HeartIcon className="navbarIcon" />
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/cart" className="link cursor">
              <ShoppingCartIcon className="navbarIcon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
