import { Link, Route, Routes } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsCartCheck, BsPeople } from "react-icons/bs";

export default function AdminHomePage() {
    return (
        <div className="bg-slate-400 w-full h-screen flex">
            {/* Sidebar */}
            <div className="w-[30%] h-screen bg-slate-600 flex flex-col items-center py-10">
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

            <div className="w-[70%] h-screen bg-red-300 flex justify-center items-center">
            <Routes path="/*">
            <Route path ="/dashboard" element={<h1>Dashboard</h1>}/>
            <Route path ="/products" element={<h1>Products</h1>}/>
            <Route path = "/orders" element={<h1>Orders</h1>}/>
            <Route path = "/customers" element={<h1>Customers</h1>}/>
            <Route path ="/*" element={<h1>404 not found the admin page</h1>}/>
            </Routes>
            </div>
        </div>
    );
}
