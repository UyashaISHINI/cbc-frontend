import { useEffect, useState } from "react"
import { loadCart } from "../../utils/cartFunction"
import CartCard from "../../components/cartCard"

export default function Cart(){
    const [cart,setCart]=useState([])
    useEffect(
        ()=>{
            setCart(loadCart())
        },[]
    )
    return(
        <div className="w-full h-full overflow-y-scroll flex flex-col items-end">
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
            {
                cart.map(
                    (item)=>{
                        return(
                            <CartCard key={item.productId} productId={item.productId} qty={item.qty}/>
                        )
                    }
                )
            }</table>
            <buton className="bg-secondary text-accent p-2 rounded-lg w-[200px] hover:bg-light-secondary">Checkout</buton>
        </div>
    )
}