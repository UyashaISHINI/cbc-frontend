import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageURLs, setImageURLs] = useState("");
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  async function handleSubmit(){
    const altNames = alternativeNames.split(",")
    const imgUrls = imageURLs.split(",")

    const product = {
        productId : productId,
        productName : productName,
        altNames : altNames,
        images : imgUrls,
        price : price,
        lastPrice : lastPrice,
        stock : stock,
        description : description
    }

    const token = localStorage.getItem("token")

    try{
    await  axios.post("http://localhost:5000/api/products",product,{
        headers : {
            Authorization : "Bearer "+token
        }
    })
    navigate("/admin/products")
    toast.success("Product added successfully")
    }catch(err){
        toast.error("Failed to add product")
    }

  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 h-auto sm:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-center text-slate-700 mb-4">
          Add Product Form
        </h1>
        <div className="space-y-3">
          {/* Product ID */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Product ID
            </label>
            <input
              type="text"
              placeholder="Enter Product ID"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Alternative Names */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Alternative Names
            </label>
            <input
              type="text"
              placeholder="Enter Alternative Names"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          {/* Image URLs */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Image URLs
            </label>
            <input
              type="text"
              placeholder="Enter Image URLs"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={imageURLs}
              onChange={(e) => setImageURLs(e.target.value)}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter Price"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Last Price */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Last Price
            </label>
            <input
              type="number"
              placeholder="Enter Last Price"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Stock
            </label>
            <input
              type="number"
              placeholder="Enter Stock Quantity"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Description
            </label>
            <textarea
              placeholder="Enter Product Description"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-600 text-white font-semibold rounded-md py-2 text-sm hover:bg-slate-700 transition duration-200"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}