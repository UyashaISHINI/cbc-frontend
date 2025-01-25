import { useEffect, useState } from "react"
import { loadCart } from "../../utils/cartFunction"
import CartCard from "../../components/cartCard"
import axios from "axios"

export default function Cart(){
    const [cart,setCart]=useState([])
    const [total,setTotal] = useState(0)
    const [labeledTotal,setLabeledTotal]=useState(0)
    useEffect(
        ()=>{
            setCart(loadCart())
            axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders/quote",{
                orderedItems : loadCart()
            }).then((res)=>{
                console.log(res.data)
                setTotal(res.data.total)
                setLabeledTotal(res.data.labeledTotal)
            })
        },[]
    )
    function onOrderCheckOutClick(){
        const token = localStorage.getItem("token")
        if(token == null){
            return;
        }
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/orders",
            {orderedItems : cart,
                name:"John Doe",
                address:"123,Galle,Colombo",
                phone:"0767412346",
            },
            {headers: {
            Authorization: "Bearer " + token,}
          }).then(
            (res)=>{
                console.log(res.data)
            }
        )
    }
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
            }
            </table>
            <h1 className="text-2xl font-bold text-secondary">Total: LKR. {labeledTotal.toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-secondary">Discount: LKR. {(labeledTotal-total).toFixed(2)}</h1>
            <h1 className="text-2xl font-bold text-secondary">Grand Total: LKR. {total.toFixed(2)}</h1>
            <button onClick={onOrderCheckOutClick} className="bg-secondary text-accent p-2 rounded-lg w-[200px] hover:bg-light-secondary">Checkout</button>
        </div>
    )
}