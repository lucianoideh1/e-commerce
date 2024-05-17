import {useEffect} from 'react'
// import { Card } from "./card"
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
                <ul className="grid grid-cols-4 min-w-full gap-4">
                    {loading ? null : (
                            state.map((i) => (
                            <li key={i.title} className="rounded-sm p-2 bg-slate-300 shadow-md shadow-slate-400 max-w-48"> 
                            <div className="flex flex-col leading-3">
                            <img src={i.image} alt="item" />
                            <p className="font-medium text-lg">${i.price}</p>
                            <p className="text-gray-700 text-base">{i.category}</p>
                            <p className="font-bold text-lg">{i.title}</p>
                         </div></li>))
                    )}
                </ul>
            </div>
    )
   
   
}

