import  { useLoaderData } from "react-router-dom";
import { FilterList } from "../components/filterList"
import { ItemCollection } from "../components/itemCollection";

// itemTwoLoader
export const ShopLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json()
}


export default function Shop(){
const items = useLoaderData()

return(
    <>
    {items.length ? (
        <div id="shop" className="grid grid-cols-4 p-8 overflow-x-hidden box-content">            
        <FilterList></FilterList>
        {/* <ItemCollection></ItemCollection> */}
        <div className="item-two flex flex-wrap justify-center col-start-2 col-end-5">
        {items.map((item)=>(
            <div key={item.id} className="p-2 bg-slate-200 border-2 border-gray-500 m-2 max-w-48">
            <p className="font-bold text-xl">{item.title}</p>
            <p className="text-gray-500 text-base">{item.category}</p>
            <p className="font-medium text-lg">${item.price}</p>
            {/* <p><span>rating ({item.rating}/5) - {item.count}</span></p> */}
            <img src={item.image} alt="item" />
        </div>
        ))}
    </div>
        </div>
    ): <p> noItems </p>}
    </>
)

}