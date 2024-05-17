// import { Card } from "./card"
export const ItemCollection = ({item})  => {
    return(
        <div id="collection" className="p-2 bg-slate-200 border-2 border-gray-500 m-2  text-lg font-semibold flex flex-col items-center">
            <h3>ItemCollection</h3>
            <ul className="flex flex-wrap">
            {item.map((i) => (
            <li key={i.title} className="p-2 bg-slate-400 border-2 border-gray-500 m-2 max-w-48"> 
            <div >
            <p className="font-bold text-xl">{i.title}</p>
            <p className="text-gray-700 text-base">{i.category}</p>
            <p className="font-medium text-lg">${i.price}</p>
            {/* <p><span>rating ({item.rating}/5) - {item.count}</span></p> */}
            <img src={i.image} alt="item" />
        </div></li>))}
            </ul>
        </div>
    )
}

