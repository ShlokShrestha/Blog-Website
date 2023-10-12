import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditPage = () => {
  const { id } = useParams();
  const [editProduct, setEditProduct] = useState({
    title: "",
    price: 0,
    discount: 0,
    rating: 0,
    description: "",
    category: "",
    thumbnail: "",
  });
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/product/${id}`);
        setEditProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProduct();
  }, [id]);

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, editProduct);
    navigate("/");
  };

  const updateProduct = async (id, editProduct) => {
    try {
      const res = await axios.patch(
        `http://localhost:8000/product/${id}`,
        editProduct
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="p-8 bg-slate-200">
        <h1 className="text-center text-3xl font-semibold underline text-gray-800">
          Edit you Information
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
              value={editProduct.title}
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
              value={editProduct.price}
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
              value={editProduct.discount}
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
              value={editProduct.rating}
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
              value={editProduct.description}
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
              value={editProduct.category}
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
              value={editProduct.thumbnail}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
