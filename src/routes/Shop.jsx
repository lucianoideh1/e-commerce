import  { useLoaderData,Outlet } from "react-router-dom";
import { Card } from '../components/card'
// itemTwoLoader
export const ShopLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products",{mode:'cors'})
    return res.json()
}
export default function Shop(){
    const items = useLoaderData()
    // const categories = ['men','women','jewelery','electronics','miscellaneous']

return(
    <>
    {items.length ? (
        <div id="shop" className="grid grid-cols-4 p-6">            
        {/* <Outlet></Outlet> */}
        <div className="item-two flex flex-wrap justify-center col-start-1 col-end-5">
        {items.map((item)=>(

        <div key={item.id}>
            <Card item={item} ></Card>
        </div>
        ))}
    </div>
        </div>
    ): <p> noItems </p>}
    </>
)

}