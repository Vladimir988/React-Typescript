import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul>
        <li className={classes.item}><Link to="/">Home</Link></li>
        <li className={classes.item}><Link to="/user">User</Link></li>
        <li className={classes.item}><Link to="/todos">Todos</Link></li>
        <li className={classes.item}><Link to="/garbage">Garbage</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;