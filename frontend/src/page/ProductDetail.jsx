import React, { useEffect, useState } from "react";
import products from "../data.jsx";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const productDetail = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/product/${id}`);
      setProduct(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productDetail();
  }, []);

  const {
    _id,
    thumbnail,
    title,
    category,
    price,
    discount,
    rating,
    description,
  } = product;
  console.log(product);
  const handleClick = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${_id}`);
      setProduct(res.data);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (_id) => {
    navigate(`/editPage/${_id}`);
  };
  return (
    <div className="p-8 bg-slate-100">
      <div>
        <h1 className="text-center text-3xl font-semibold underline text-gray-800">
          Product Detail
        </h1>
        <div className="grid lg:grid-cols-2 my-10">
          <img src={thumbnail} className="] mx-auto" alt="" />
          <div>
            <div className="mx-5 mb-2 mt-5">
              <h3 className="text-5xl mb-1 font-bold uppercase">{title}</h3>
              <p className="text-2xl mb-1">Category: {category}</p>
              <p className="text-2xl mb-1">Price: {price}</p>
              <p className="text-2xl mb-1">Discount: {discount}%</p>
              <p className="text-2xl mb-1">Rating: {rating}</p>
              <p className="text-2xl mb-1">{description}</p>
              <div className="flex">
                <div className="my-5 mr-5">
                  <button
                    type="submit"
                    class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                    onClick={() => handleChange(_id)}
                  >
                    Edit Detail
                  </button>
                </div>
                <div className="my-5 mr-5">
                  <button
                    type="submit"
                    class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
                    onClick={() => handleClick(_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
