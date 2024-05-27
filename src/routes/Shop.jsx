import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filter } from "../components/filter";
import { ItemCollection } from "../components/itemCollection";

// itemTwoLoader
export const ShopLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products",{mode:'cors'})
    return res.json()
}

export default function Shop(){
    const items = useLoaderData()

    const [state, setState] = useState(null)
    const [loading,setLoading] = useState(true)
    // const [error,setError] = useState(null)

    useEffect(() => {

         function thing(){
            setState(items)
            setLoading(false)
            console.log('items have been loaded!')
        }
        thing()
    },[items])


return(

    <section id='shop' className=" lg:grid-cols-6">
        <Filter></Filter>
        {loading ? null: (<ItemCollection state={state} loading={loading}></ItemCollection>)}
    </section>
)

}