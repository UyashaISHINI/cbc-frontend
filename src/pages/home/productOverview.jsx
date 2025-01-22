import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";

export const backend = import.meta.env.VITE_BACKEND_URL;

export default function ProductOverview(){
    const params = useParams();
    const productId = params.id;
    const [product,setProduct] = useState(null)
    // const [status,setStatus] = useState("loading")
    useEffect(
         ()=>{
            console.log(productId)
            axios.get(backend + "/api/products/"+productId).
             then((res)=>{
                 console.log(res.data)
    //             // if(res.data == null){
    //             //     setStatus("not-found")
    //             // }
             })
            }
        ,[])
    return(
        <div className="w-full h-[calc(100hv-100px)]">
            {/* {
                status == "loading"&&(
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-2 border-gray-900 border-b-secondary border-b-4"></div>
                    </div>
                )
            }
            {
                status == "not found"&&(
                    <ProductNotFound/>
                )
            }
            {
                status == "found"&&(
                    <div>
                        Product Found
                    </div>
                )
            } */}<h1>Product Overview</h1>
        </div>
    );
} 