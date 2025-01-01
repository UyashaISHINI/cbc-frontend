import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsCartCheck, BsPeople } from "react-icons/bs";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminHomePage() {
    return (
        <div className="bg-slate-400 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[20%] h-screen bg-slate-600 flex flex-col items-center py-10">
                <Link className="flex items-center gap-2 text-white text-lg mb-6 hover:text-slate-300" to="/admin/dashboard">
                    <BsGraphUp size={24} /> Dashboard
                </Link>
                <Link className="flex items-center gap-2 text-white text-lg mb-6 hover:text-slate-300" to="/admin/products">
                    <BsBoxSeam size={24} /> Products
                </Link>
                <Link className="flex items-center gap-2 text-white text-lg mb-6 hover:text-slate-300" to="/admin/orders">
                    <BsCartCheck size={24} /> Orders
                </Link>
                <Link className="flex items-center gap-2 text-white text-lg hover:text-slate-300" to="/admin/customers">
                    <BsPeople size={24} /> Customers
                </Link>
            </div>

            <div className="w-[80%] h-screen ">
            <Routes path="/*">
            <Route path ="/dashboard" element={<h1>Dashboard</h1>}/>
            <Route path ="/products" element={<AdminProductsPage/>}/>
            <Route path ="/products/addProduct" element={<h1>Add Products</h1>}/>
            <Route path = "/orders" element={<h1>Orders</h1>}/>
            <Route path = "/customers" element={<h1>Customers</h1>}/>
            <Route path ="/*" element={<h1>404 not found the admin page</h1>}/>
            </Routes>
            </div>
        </div>
    );
}
