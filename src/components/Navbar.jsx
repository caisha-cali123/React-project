//navpar
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-green-800 p-4 text-center">
      <div className="container mx-auto flex justify-between   items-center ">
        <div className="text-white   text-2xl font-bold  ">
          <h2>My Page</h2>
        </div>
        <div>
          <ul className="flex space-x-4  text-white">
            <li>
              <Link to="/" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-gray-400">Service</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;