import { Link } from "react-router-dom"
export default function Index(){
    return(
        <div id="index" className="m-auto p-2 flex flex-col gap-4 items-center">
            <h1 className="font-bold text-2xl">Welcome to the shop</h1>
            <p>let the thing begging</p>
            <Link to={'/shop'} className="bg-gray-900 text-gray-50 p-4 text-center">See products</Link>
        </div>
    )
}