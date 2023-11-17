import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/TrueHomes(Croped).png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-left">
        <NavLink className="nav-left-items" to="/buy">Buy</NavLink>
        <NavLink className="nav-left-items" to="/sell">Sell</NavLink>
        <NavLink className="nav-left-items" to="/rent">Rent</NavLink>
        <NavLink className="nav-left-items" to="/mortgage">Mortgage</NavLink>
        <NavLink className="nav-left-items" to="/agents">Find Agents</NavLink>
      </div>
      <div className="nav-mid">
        <NavLink to="#" style={{border:"none"}}>
          <img src={logo} alt="logo..." />
        </NavLink>
      </div>
      <div className="nav-right">
      <NavLink className="nav-right-items" to="/about">About</NavLink>
      <NavLink className="nav-right-items" to="/rentals">Manage Rentals</NavLink>
      <NavLink className="nav-right-items" to="/advertise">Advertise</NavLink>
      <NavLink className="nav-right-items sign-in-btn" to="/signin">Sign-in</NavLink>
      </div>
    </div>
  );
}
