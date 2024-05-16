import { useLoaderData } from "react-router-dom";
import { Card } from '../components/card'
import { useEffect } from "react";

// itemTwoLoader
export const ShopLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products",{mode:'cors'})
    return res.json()
}

export default function Shop(){
    const items = useLoaderData()


    useEffect(() => {
        function thing(){
            console.log('items have been loaded!')
        }
        thing()
    },[items])

return(
    // <>
    // {items.length ? (
    //     <div id="shop" className="grid grid-cols-4 p-6">            
    //     <div className="item-two flex flex-wrap justify-center col-start-1 col-end-5">
    //     {items.map((item)=>(

    //     <div key={item.id}>
    //         <Card item={item} ></Card>
    //     </div>
    //     ))}
    // </div>
    //     </div>
    // ): <p> noItems </p>}
    // </>
    <div>Shop</div>
)

}