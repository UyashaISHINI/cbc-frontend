import { Link } from "react-router-dom"

export default function ProductCard(props){
    console.log(props)
    return(
            <Link to={`/productInfo/${props.product.productId}`}>
            <div className='w-[300px] h-[400px] m-[10px] rounded-xl shadow-lg shadow-gray-500 hover:shadow-primary hover:border hover:border-gray-500 flex flex-col items-center justify-center'>
                <img src={props.product.images[0]} alt="" className='h-[200px] w-[200px] object-cover'/>
                <div className="text-lg font-semibold">{props.product.name}</div>
                <div className="text-lg font-semibold">LKR {props.product.price}</div>
            </div>
            </Link>
    )
}