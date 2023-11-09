import React from "react";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const { _id, image, title, category, price, discount, rating } =
    product;
  return (
    <div>
      <div className="bg-gray-300 rounded shadow-md " key={_id}>
        <Link to={`/productDetail/${_id}`}>
          <div className="overflow-hidden h-64 ">
            <img src={`http://localhost:8000/uploads/${image}`} className="object-cover w-full h-full rounded" />
          </div>
        </Link>
        <div className="mx-5 mb-2 mt-5">
          <h3 className="text-xl mb-1 font-semibold uppercase">{title}</h3>
          <p className="text-lg mb-1">Category: {category}</p>
          <p className="text-lg mb-1">Price: {price}</p>
          <p className="text-lg mb-1">Discount: {discount}%</p>
          <p className="text-lg mb-1">Rating: {rating}</p>
        </div>
        <div className="flex justify-center pb-5">
          <Link
            to={`/productDetail/${_id}`}
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
