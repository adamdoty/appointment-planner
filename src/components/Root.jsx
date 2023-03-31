import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contacts
        </NavLink>
        <NavLink
          to="/appointments"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Appointments
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
