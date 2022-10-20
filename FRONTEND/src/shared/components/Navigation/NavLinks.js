import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY TASKS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD TASK</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && <Button onClick={auth.logout}>LOGOUT</Button>}
    </ul>
  );
};

export default NavLinks;
