import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 text-white">
      <h1 className="text-center text-5xl font-bold mt-3 mb-6">MERN Project</h1>
      <div className="text-center flex mb-2">
        <ul className=" flex font-medium mx-auto text-lg">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/createPage">Create Post</Link>
          </li>
          <li className="mx-3">
            <Link to="/">Login/Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
