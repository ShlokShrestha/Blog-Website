import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import CreatePage from "./page/CreatePage";
import EditPage from "./page/EditPage";
import LoginPage from "./page/loginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./page/ProductDetail";
import Signup from "./page/SignUp";
import { UserContextProvider } from "./context/UserContext.jsx";
const App = () => {
  const isAuthenticated = false;
  return (
    <>
      <Router>
        <UserContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signUpPage" element={<Signup />} />
            <Route
              path="/createPage"
              element={
                isAuthenticated ? (
                  <CreatePage />
                ) : (
                  <Navigate to="/loginPage" replace />
                )
              }
            />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/editPage/:id" element={<EditPage />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </>
  );
};

export default App;
