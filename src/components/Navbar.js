import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Navbar = () => (
  <div>
    <div>
      <div className="Logo">
        <img
          src={logo}
          alt="planet"
        />
        <p>Space Travelers Hub</p>
      </div>
    </div>
    <nav>
      <ul className="">
        <li>
          <NavLink to="/rockets"> Rockets </NavLink>
        </li>
        <li>
          <NavLink to="/missions"> Missions </NavLink>
        </li>
        <li>
          <NavLink to="/profile"> My Profiles </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
