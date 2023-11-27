import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

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

  const { _id, image, title, description } = product;
  console.log(product);
  const handleClick = async (_id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/product/${_id}`);
      setProduct(res.data);

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
          Blog Detail Page
        </h1>
        <div className="grid lg:grid-cols-1 my-10 w-2/3 mx-auto">
          <img
            src={`http://localhost:8000/uploads/${image}`}
            className="object-cover w-full h-full rounded"
          />
          <div>
            <div className="mx-5 mb-2 mt-5">
              <h3 className="text-xl mb-1 font-bold uppercase">{title}</h3>
              <p className="text-2xl mb-1">{description}</p>
              {userInfo ? (
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
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
