import { useState } from "react";
import { Outlet,Link} from "react-router-dom";

export default function Root(){
const [cart, setCart] = useState([])
    return(
        <section id='index-site' className="w-screen">
            <section id='nav-bar'className="hidden lg:flex gap-6 items-center justify-center w-full p-2 bg-gray-200	 shadow-sm shadow-slate-600">
                <h1 className=" text-gray-900 font-extrabold ">title</h1>
                <ul className="flex gap-1 text-l font-medium">
                    <li className="p-1"> <Link to={"/"}>home</Link></li>
                    <li className="p-1"> <Link to={"about"}>about</Link></li>
                    <li className="p-1"><Link to={"/shop"}>shop</Link></li>
                    <li className="p-1"><Link to={"/cart"}>cart({cart.length})</Link></li>
                </ul>
            </section>
            <section id="mobile-nav-bar" className="fixed lg:hidden bottom-0 min-w-full">
                <ul className=" flex justify-around bg-cyan-600">
                    <li className="p-4 "><Link className=" text-slate-100 hover:text-gray-800" to={'/about'}>Home</Link></li>
                    <li className="p-4 "><Link className=" text-slate-100 hover:text-gray-800" to={'/about'}>About</Link></li>
                    <li className="p-4"><Link className=" text-slate-100 hover:text-gray-800" to={'/shop'}>Shop</Link></li>
                    <li className="p-4"><Link className=" text-slate-100 hover:text-gray-800" to={'/cart'}>Cart({cart.length})</Link></li>
                </ul>
            </section>
            <main id="details" className="flex justify-center">
            <Outlet context={{cart,setCart}}></Outlet>
            </main>
        </section>
    )
}