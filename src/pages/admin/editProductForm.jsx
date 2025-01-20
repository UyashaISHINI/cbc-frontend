import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import uploadMediaToSupabase from "../../utils/mediaUpload";

export default function EditProductForm() {
    const location = useLocation()
    const navigate = useNavigate()
    const product =location.state.product
    const altNames = product.altNames.join(",")
    if(product == null){
        navigate("/admin/products")
    }
  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(altNames);
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNames = alternativeNames.split(",")

    const promisesArray = []
    let imgUrls = product.images
    if(imageFiles.length > 0){
    for (let i = 0; i < imageFiles.length; i++) {
      promisesArray[i] = await uploadMediaToSupabase(imageFiles[i])
    }
     imgUrls = await Promise.all(promisesArray)
    }

    const productData = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      stock: stock,
      description: description
    }

    const token = localStorage.getItem("token")

      try {
        await axios.put(import.meta.env.VITE_BACKEND_URL+"/api/products/"+product.productId, productData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        navigate("/admin/products");
      
        toast.success("Product updated successfully");
      } catch (err) {
        console.error("Error updated product: ", err);
        
        // Handle errors properly
        toast.error(
          err.response?.data?.message || "Failed to add product. Please try again."
        );
      }

  }

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-slate-200">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 h-auto sm:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-center text-slate-700 mb-4">
          Edit Product Form
        </h1>
        <div className="space-y-3">
          {/* Product ID */}
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Product ID
            </label>
            <input
            disabled
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
              type="file"
              placeholder="Enter Image URLs"
              className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
              onChange={(e) => {
                setImageFiles(e.target.files)
              }}
              multiple
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
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}