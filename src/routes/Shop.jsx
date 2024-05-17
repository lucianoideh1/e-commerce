import { useLoaderData } from "react-router-dom";
import { Card } from '../components/card'
import { useEffect } from "react";
import { Filter } from "../components/filter";
import { ItemCollection } from "../components/itemCollection";

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


    const item = [{
        title:'title',
        category:'men',
        price:110,
        image:'url'
    },
    {
        title:'title',
        category:'women',
        price:110,
        image:'url'
    },
    {
        title:'title',
        category:'jewelery',
        price:110,
        image:'url'
    },
    {
        title:'title',
        category:'electronics',
        price:110,
        image:'url'
    },]

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
    <div id='shop' className="grid grid-cols-6">
        <Filter></Filter>
        <ItemCollection item={item}></ItemCollection>
    </div>
)

}