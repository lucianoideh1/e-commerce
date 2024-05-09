import { Outlet,Link } from "react-router-dom";

export default function Root(){
    return(
        <div id='index-site' className="w-screen">
            <div id='nav-bar'className="flex gap-6 items-center justify-center w-full p-2 bg-gray-200	border-b-2 border-gray-400">
                <h1 className="text-2xl text-gray-900 font-extrabold">title</h1>
                <ul className="flex gap-1 text-l font-medium">
                    <li className="p-1"> <Link to={"/"}>home</Link></li>
                    <li className="p-1"> <Link to={"about"}>about</Link></li>
                    <li className="p-1"><Link to={"shop"}>shop</Link></li>
                    <li className="p-1"><Link to={"categories"}>categories</Link></li>
                    <li className="p-1"><Link to={"cart"}>cart</Link></li>
                </ul>
                <ul>
                    <li><Link to={"/item/1"}>Item 1</Link></li>
                    <li><Link to={"/item/2"}>Item 2</Link></li>
                </ul>
            </div>
        <div className="details">
            <Outlet></Outlet>
        </div>
        </div>
    )
}