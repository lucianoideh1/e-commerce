export default function Root(){
    return(
        <div id='index-site' className="w-screen">
            <div id='nav-bar'className="flex gap-6 items-center justify-center w-full p-2 bg-slate-200	 ">
                <h1 className="text-2xl text-gray-900 font-extrabold">title</h1>
                <ul className="flex gap-1 text-l">
                    <li className="p-1">about</li>
                    <li className="p-1">shop</li>
                    <li className="p-1">categories</li>
                    <li className="p-1">cart</li>
                </ul>
            </div>
        <div className="details"></div>
        </div>
    )
}