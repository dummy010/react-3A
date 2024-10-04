import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About</li>
          </Link>{" "}
          <Link to="/contact">
            {" "}
            <li>Contact</li>
          </Link>{" "}
        </ul>
      </nav>
    </div>
  );
};

export const Nav2 = () => {
  return <h1>nav2</h1>;
};

// export default Nav;
export default Nav;
