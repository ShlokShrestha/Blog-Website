import axios from "axios";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        { email, password },
        { withCredentials: true }
      );

      const data = response.data;
      const { success, username } = data;
      if (success) {
        setUserInfo(username);
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Please provide valid email and password");
    }
  };

  return (
    <div className="py-10 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-4">
            Not have account?
            <Link to="/signUpPage" className=" ml-1 hover:text-blue-800">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
