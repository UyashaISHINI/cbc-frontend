import axios from "axios"
import { useEffect, useState } from "react"
export default function AdminProductsPage(){

    const[products,setProducts]= useState(
        [
            {
                "_id": "67696d9cdce4fccd35504baf",
                "productId": "B10001",
                "productName": "Rdiant Glow Face Cream",
                "altNames": [
                    "Glowing Skin Cream",
                    "Face Brightening Cream",
                    "Radiance Booster Cream"
                ],
                "images": [
                    "https://example.com/images/beauty_product1.jpg",
                    "https://example.com/images/beauty_product1_alt1.jpg",
                    "https://example.com/images/beauty_product1_alt2.jpg"
                ],
                "price": 25.99,
                "lastPrice": 30.99,
                "stock": 150,
                "description": "A premium face cream enriched with natural ingredients to hydrate, brighten, and revitalize your skin. Suitable for all skin types.",
                "__v": 0
            },
            {
                "_id": "67696dc7dce4fccd35504bb1",
                "productId": "B10002",
                "productName": "Rdiant Glow Face Cream",
                "altNames": [
                    "Glowing Skin Cream",
                    "Face Brightening Cream",
                    "Radiance Booster Cream"
                ],
                "images": [
                    "https://example.com/images/beauty_product1.jpg",
                    "https://example.com/images/beauty_product1_alt1.jpg",
                    "https://example.com/images/beauty_product1_alt2.jpg"
                ],
                "price": 25.99,
                "lastPrice": 30.99,
                "stock": 150,
                "description": "A premium face cream enriched with natural ingredients to hydrate, brighten, and revitalize your skin. Suitable for all skin types.",
                "__v": 0
            }
        ]
    )
    
    useEffect(()=>{
        axios.get("http://localhost:5000/api/products").then(
            (res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
    },[]
)


    return(
        <div>
            <h1>Admin Products Page</h1>
            {
                products.map(
                    (product,index)=>{
                        return(
                            <div key={index}>
                                {index}
                                {product.productName}
                            </div>    
                        )
                    }
                )
            }
        </div>
    )
}
