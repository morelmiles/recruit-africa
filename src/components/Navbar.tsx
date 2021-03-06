import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//Assets
import { ReactComponent as DropdownIcon } from "../assets/Dropdown.svg";
import Logo from "../assets/Logo.svg";
import { ReactComponent as BurgerMenu } from "../assets/Menu.svg";
import MobileNavbar from "./Mobile.Navbar";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const menuList = [
    {
      id: 1,
      text: "Find candidates",
      route: "/candidates",
    },
    {
      id: 2,
      text: "Find jobs",
      route: "/employers",
    },
    {
      id: 3,
      text: "Login",
      route: "/login",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between items-center py-8  ">
        <Link to="/">
          <img src={Logo} loading="lazy" alt=" " />
        </Link>

        <BurgerMenu onClick={() => setOpen(!open)} className="sm:hidden" />

        <div className="sm:flex  md:flex-row hidden  items-center">
          <ul className="flex flex-row ">
            {menuList.map((x) => (
              <Link key={x.id} to={x.route}>
                <li className="mr-8 sm:mr-4 ">{x.text}</li>
              </Link>
            ))}
          </ul>

          <div className="dropdown inline-block relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-yellow-500 text-black font-semibold py-4 px-8 rounded inline-flex items-center"
            >
              <span className="mr-1">Signup for free</span>
              <DropdownIcon className="ml-4" />
            </button>

            {dropdownOpen && (
              <ul className="dropdown-menu absolute bg-white hidden w-52 pt-2">
                <li className="">
                  <NavLink
                    className="rounded-t bg-white hover:text-yellow-400  py-3 px-8  block whitespace-no-wrap"
                    to="/candidate-signup"
                  >
                    Find a Job
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    className="bg-white hover:text-yellow-400 py-3 px-8 block whitespace-no-wrap"
                    to="/recruitor-signup"
                  >
                    Post a Job
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {open && <MobileNavbar />}
    </>
  );
};

export default Navbar;
