import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <div id='index-site' className="w-screen">
            <div id='nav-bar'className="flex gap-6 items-center justify-center w-full p-2 bg-slate-200	 ">
                <h1 className="text-2xl text-gray-900 font-extrabold">title</h1>
                <ul className="flex gap-1 text-l font-medium">
                    <li className="p-1"> <a href="about">about</a></li>
                    <li className="p-1"><a href="shop">shop</a></li>
                    <li className="p-1"><a href="categories">categories</a></li>
                    <li className="p-1"><a href="cart">cart</a></li>
                </ul>
                <ul>
                    <li><a href="/item/1">Item 1</a></li>
                    <li><a href="/item/2">Item 2</a></li>
                </ul>
            </div>
        <div className="details">
            <Outlet></Outlet>
        </div>
        </div>
    )
}