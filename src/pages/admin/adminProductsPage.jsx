import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded,setProductsLoaded]=useState(false);

  useEffect(() => {
    if(!productsLoaded){
      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then((res) => {
        setProducts(res.data);
        console.log(res.data);
        setProductsLoaded(true);
      });
    }
  }, [productsLoaded]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
        <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-slate-600 p-3 rounded-xl border-[#475569] border-[2px] text-[25px] hover:bg-slate-300 hover:rounded-2xl"><FaPlus/></Link>
      <div className="container mx-auto rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Products Page
        </h1>
        {
          productsLoaded?        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg overflow-hidden text-ellipsis whitespace-nowrap">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-4 border border-gray-300">Product ID</th>
                <th className="p-4 border border-gray-300">Product Name</th>
                <th className="p-4 border border-gray-300">Price</th>
                <th className="p-4 border border-gray-300">Last Price</th>
                <th className="p-4 border border-gray-300">Stock</th>
                <th className="p-4 border border-gray-300">Description</th>
                <th className="p-4 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } text-gray-700`}
                >
                  <td className="px-6 py-4 border border-gray-300">{product.productId}</td>
                  <td className="px-6 py-4 border border-gray-300">
                    {product.productName}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">${product.price}</td>
                  <td className="px-6 py-4 border border-gray-300">
                    ${product.lastPrice}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">{product.stock}</td>
                  <td className="px-6 py-4 border border-gray-300">
                    {product.description}
                  </td>
                  <td className="porder border-gray-300 flex justify-center space-x-4">
                    <button className="text-red-500 hover:text-red-700"
                           title="Delete"
                           onClick={()=>{
                           const token = localStorage.getItem("token");
                           axios.delete(import.meta.env.VITE_BACKEND_URL+`/api/products/${product.productId}`,{
                            headers:{
                              Authorization:`Bearer ${token}`,
                            },
                           }).then((res)=>{
                            console.log(res.data);
                            toast.success("Product deleted successfully");
                            setProductsLoaded(false);
                           });
                           }}
                    >
                      <FaTrash />
                    </button>
                    <button className="text-blue-500 hover:text-blue-700"
                    onClick={()=>{
                      navigate("/admin/products/editProduct",{state : {product : product}});
                    }}
                    >
                      <FaPencilAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>:<div className="w-full h-full flex justify-center items-center">
          <div className="w-[30px] h-[30px] border-[3px] border-slate-400 border-b-slate-600 animate-spin rounded-full"> </div>
        </div>
        }
      </div>
    </div>
  );
}
