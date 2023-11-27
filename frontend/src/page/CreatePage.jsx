import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", product.image, product.image.name);
    formData.append("title", product.title);
    formData.append("description", product.description);

    try {
      const res = await axios.post("http://localhost:8000/product", formData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  return (
    <div>
      <div className="p-8 bg-slate-200">
        <h1 className="text-center text-3xl font-semibold text-gray-800">
          Submit Your Blog
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
            <label for="productImage" className="block text-gray-600 mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="form-input w-full"
              onChange={handleImage}
            />
          </div>
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
