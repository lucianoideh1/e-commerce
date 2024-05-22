import { Link } from 'react-router-dom'
import {useEffect} from 'react'
import { Card } from './card'
export const ItemCollection = ({ state,loading})  => {
    
useEffect(() => {
    function alert(){
        console.log('props setted')
    }
    alert()
},[state, loading])
    return(
        <section id="item-collection" className="col-start-2 col-end-7 p-2  shadow-slate-600 m-2  text-lg font-semibold flex flex-col items-center">
                <ul className="grid grid-cols-6 gap-4  justify-start min-w-full">
                    {loading ? null : (
                            state.map((i) => (
                                    <li key={i.title} className="rounded-sm p-2 bg-slate-300 shadow-md shadow-slate-400 max-w-48 max-h-72 overflow-hidden hover:scale-105 hover:cursor-pointer hover:shadow-slate-900 transition-all duration-500"> 
                                <Link to={`/products/${i.id}`}>
                                   <Card props={{image:i.image,price:i.price,category:i.category,title:i.title}}></Card>
                                </Link>
                             </li>))
                    )}
                </ul>
            </section>
    )
}

