import { Link } from "react-router-dom"

export default function ProductCard(props){
    console.log(props)
    return(
            <Link to={`/productInfo/${props.product.productId}`}>
            <div className='w-[300px] h-[450px] m-[50px] rounded-xl shadow-lg shadow-gray-500 hover:shadow-primary hover:border-[3px] overflow-hidden flex flex-col'>
                <img src={props.product.images[0]} alt="" className='h-[65%] w-full object-cover '/>
                <div className="max-h-[35%] h-[35%] p-4 flex flex-col justify-between">
                <h1 className="text-3xl font-bold text-secondary text-center">{props.product.productName}</h1>
                <h2 className="text-lg font-bold text-gray-500 text-center">{props.product.productId}</h2>
                <p className="text-left text-xl font-semibold">LKR. {props.product.lastPrice.toFixed(2)}</p>
                {
                    (props.product.lastPrice < props.product.price)&&
                    <p className="text-left text-lg text-gray-500  font-semibold line-through">LKR. {props.product.price.toFixed(2)}</p>
                }
                </div>
            </div>
            </Link>
    )
}