import { Link } from "react-router-dom"
export default function Index(){
    return(
        <section id="home" className="m-auto p-6 flex flex-col gap-4 items-center ">
            <h1 className="text-4xl font-bold lg:text-7xl">Welcome to the shop</h1>
            <p className="text-2xl lg:text-3xl text-gray-500 italic">let the thing begin</p>
            <Link to={'/shop'} className="rounded-xl bg-gray-900 text-gray-50 py-2 px-4 text-center">See products</Link>
            <img src="/shop.png" alt="shop"  className="w-42  lg:max-w-xl shadow-md"/>
        </section>
    )
}