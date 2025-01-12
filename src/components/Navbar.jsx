import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/shop"> Shop</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
          <img
            className="w-10"
            src="https://i.ibb.co.com/42Qx9pq/Meubel-House-Logos-05.png"
            alt=""
          />
          <a className="btn btn-ghost text-xl">Furniro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/shop"> Shop</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <LuUserRound className="w-8 h-6 text-gray-800" />
          <IoIosSearch className="w-8 h-6 text-gray-800" />
          <CiHeart className="w-8 h-6 text-gray-800" />
          <CiShoppingCart className="w-8 h-6 text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
