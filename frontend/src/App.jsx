import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import CreatePage from "./page/CreatePage";
import EditPage from "./page/EditPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./page/ProductDetail";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createPage" element={<CreatePage />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/editPage/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
