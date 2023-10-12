import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePage = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);
    navigate("/");
  };

  const createProduct = async (product) => {
    try {
      const res = await axios.post("http://localhost:8000/product", product);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="p-8 bg-slate-200">
        <h1 className="text-center text-3xl font-semibold underline text-gray-800">
          Submit Your Information
        </h1>
        <form
          className="lg:w-2/5 w-full mx-auto bg-gray-300 py-10 px-8 my-10 rounded"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label for="title" className="block text-gray-600 mb-2 ">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter your product name"
              className="form-input w-full rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label for="price" className="block text-gray-600 mb-2 ">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter your product price"
              className="form-input w-full rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label for="discount" className="block text-gray-600 mb-2 ">
              Discount:
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              placeholder="Enter your product discount"
              className="form-input w-full rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>{" "}
          <div className="mb-4">
            <label for="discount" className="block text-gray-600 mb-2 ">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="Enter your product discount"
              className="form-input w-full rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              for="productDescription"
              className="block text-gray-600 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter your product detail"
              className="form-input w-full rounded px-3 py-1"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              for="productDescription"
              className="block text-gray-600 mb-2"
            >
              Categories
            </label>
            <select
              id="category"
              name="category"
              className="form-control w-full outline-none p-2 mb-2"
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="smartphone">SmartPhone</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
          <div className="mb-4">
            <label for="title" className="block text-gray-600 mb-2 ">
              Thumbnail
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              placeholder="Enter your product name"
              className="form-input w-full rounded px-3 py-1"
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-4">
            <label for="productImage" className="block text-gray-600 mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              className="form-input w-full"
            />
          </div> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
