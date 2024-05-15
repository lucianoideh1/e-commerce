import { Link } from "react-router-dom"
export default function Index(){
    return(
        <div id="index" className="m-auto p-6 flex flex-col gap-4 items-center ">
            <h1 className="font-bold text-7xl">Welcome to the shop</h1>
            <p className="text-3xl text-gray-500 italic">let the thing begin</p>
            <Link to={'/shop'} className="bg-gray-900 text-gray-50  p-4 text-center">See products</Link>
            <img src="/shop.png" alt="shop"  className="max-w-xl shadow-md"/>
        </div>
    )
}