import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get("http://localhost:8000/profile", {
          withCredentials: true,
        });
        const { username } = response.data;
        setUserInfo(username);
      } catch (error) {
        console.log(error);
      }
    };

    checkAuthentication(); // Check authentication status
  }, [setUserInfo]);

  async function logout() {
    try {
      await axios.post("http://localhost:8000/logout", null, {
        withCredentials: true,
      });

      setUserInfo(null);
      navigate("/loginPage");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <div className="bg-gray-800 p-4 text-white">
      <h1 className="text-center text-5xl font-bold mt-3 mb-6">MERN Project</h1>
      <div className="text-center flex mb-2">
        <ul className=" flex font-medium mx-auto text-lg">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          
          {userInfo ? (
            <div className="mx-3 flex">
              <Link to="/createPage " className="mr-5">
                Create Post
              </Link>
              <button onClick={logout}>Logout ({userInfo})</button>
            </div>
          ) : (
            <li className="mx-3">
              <Link to="/loginPage">Login/Register</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
