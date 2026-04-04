import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/animation">Animação</NavLink>
        </li>
        <li>
          <NavLink to="/scifi">scifi</NavLink>
        </li>
        <li>
          <NavLink to="/fantasy">Fantasia</NavLink>
        </li>
        <li>
          <NavLink to="/aventure">Aventura</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
