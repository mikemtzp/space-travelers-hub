import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Navbar = () => {
  const activeClassName = 'underline';
  return (
    <div>
      <div>
        <div className="Logo">
          <img src={logo} alt="planet" />
          <p>Space Travelers Hub</p>
        </div>
      </div>
      <nav>
        <ul className="">
          <li>
            <NavLink
              to="/rockets"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              My Profiles
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
