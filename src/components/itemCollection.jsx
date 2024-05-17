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
        <div id="collection" className="col-start-2 col-end-7 p-2 bg-slate-200 shadow-md shadow-slate-600 m-2  text-lg font-semibold flex flex-col items-center">
            <h3>ItemCollection</h3>
                <ul className="flex flex-wrap gap-4  min-w-full">
                    {loading ? null : (
                            state.map((i) => (
                            <li key={i.title} className="rounded-sm p-2 bg-slate-300 shadow-md shadow-slate-400 max-w-48 max-h-72 overflow-y-hidden hover:scale-105 hover:cursor-pointer hover:shadow-slate-900 transition-all duration-500"> 
                            <Card props={{image:i.image,price:i.price,category:i.category,title:i.title}}></Card>
                                {/* <div className="flex flex-col leading-3">
                                    <img src={i.image} alt="item" className='object-cover max-h-40' />
                                    <p className="font-medium text-lg">${i.price}</p>
                                    <p className="text-gray-700 text-base">{i.category}</p>
                                    <p className="font-bold text-base">{i.title}</p>
                                </div> */}
                             </li>))
                    )}
                </ul>
            </div>
    )
   
   
}

