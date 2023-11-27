import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const HomePage = () => {
  const [allProduct, setAllProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8000/product");
      console.log(res.data)
      setAllProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="p-8 bg-slate-100 h-full">
      <div>
        <h1 className="text-center text-3xl font-semibold text-gray-800">
          All BLog Post
        </h1>

        <div className="grid lg:grid-cols-3 gap-20 p-10">
          {allProduct.map((data) => (
            <Card product={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
