export default function Root(){
    return(
        <div className="container min-h-full flex flex">
            <div id='sidebar' 
            className="border-2 border-solid border-slate-950
            text-3xl font-black w-80 min-h-full flex flex-col align-center p-5 text-white bg-gray-950">
                <h1 className="pb-5">title</h1>
                <ul>
                    <li><a href="#">test</a></li>
                    <li><a href="#">test</a></li>
                    <li><a href="#">test</a></li>
                    <li><a href="#">test</a></li>
                    <li><a href="#">test</a></li>
                </ul>
            </div>
            <div id='details' className="max-w-full p-5">
                <h2>Details</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, iste quos. Minus cupiditate blanditiis quibusdam et sit? Iste, esse odio!</p>
            </div>
        </div>
    )
}