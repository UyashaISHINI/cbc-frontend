import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../components/imageSlider";
import { addToCart, clearCart } from "../../utils/cartFunction";
import toast from "react-hot-toast";

export const backend = import.meta.env.VITE_BACKEND_URL;

export default function ProductOverview() {
    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        console.log(productId);
        axios
            .get(backend + "/api/products/" + productId)
            .then((res) => {
                console.log(res.data);
                if (res.data == null) {
                    setStatus("not-found");
                }
                if(res.data != null){
                    setProduct(res.data)
                    setStatus("found")
                }
            });
    }, []);
    function onAddtoCartClick(){
        addToCart(product.productId,1)
        toast.success(product.productId+" Added to cart")
    }

    return (
        <div className="w-full h-[calc(100vh-80px)]">
            {
                status === "loading" && (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-4 border-gray-900 border-t-secondary"></div>
                    </div>
                )
            }
            {
                status === "not-found" && (
                    <ProductNotFound/>
                )
            }
            {
                status === "found" && (
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
                        <h1 className="text-3xl font-bold text-accent lg:hidden">{product.productName}</h1>
                        <p className="text-xl text-accent lg:hidden">{(product.price>product.lastPrice)&&<span className="line-through text-red-500">LKR{product.price}</span>
                            }<span>{"LKR"+product.lastPrice}</span></p>
                       <div className="w-[100%] lg:w-[35%] lg:h-full">
                        <ImageSlider images = {product.images}/>
                        </div>
                        <div className="w-[65%] h-full p-4">
                            <h1 className="text-3xl font-bold text-accent hidden lg:block">{product.productName}</h1>
                            <h1 className="text-3xl font-bold text-gray-500">{product.altNames.join(" | ")}</h1>
                            <p className="text-xl text-accent hidden lg:block">{(product.price>product.lastPrice)&&<span className="line-through text-red-500">LKR{product.price}</span>
                            }<span>{"LKR"+product.lastPrice}</span></p>
                            <p className="text-xl text-accent line-clamp-3">{product.description}</p>
                            <button onClick={onAddtoCartClick} className="bg-secondary text-accent p-2 rounded-lg">Add to cart</button>
                        </div>

                    </div>
                )
            }
        </div>
    );
}
