import { useState } from "react";
import { Outlet,Link} from "react-router-dom";

export default function Root(){
const [cart, setCart] = useState(0)
const [counter,setCounter] = useState(0)
    return(
        <section id='index-site' className="w-screen">
            <section id='nav-bar'className="flex gap-6 items-center justify-center w-full p-2 bg-gray-200	 shadow-sm shadow-slate-600">
                <h1 className="text-2xl text-gray-900 font-extrabold ">title</h1>
                <ul className="flex gap-1 text-l font-medium">
                    <li className="p-1"> <Link to={"/"}>home</Link></li>
                    <li className="p-1"> <Link to={"about"}>about</Link></li>
                    <li className="p-1"><Link to={"/shop"}>shop</Link></li>
                    <li className="p-1"><Link to={"categories"}>categories</Link></li>
                    <li className="p-1"><Link to={"cart"}>cart({cart})</Link></li>
                </ul>
            </section>
            <main id="details" className="flex justify-center">
            <Outlet context={{counter,setCounter}}></Outlet>
            </main>
        </section>
    )
}