import  { useLoaderData } from "react-router-dom";

// itemTwoLoader
export const itemTwoLoader = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    return res.json()
}

export async function loader() {
    const items = itemTwoLoader();
    return { items }
}


export default function ItemTwo(){
const items = useLoaderData()

return(
    <>
    {items.length ? (
        <div className="item-two">
        {items.map((item)=>(
            <div className="test" key={item.id}>{item.title}</div>
        ))}
    </div>
    ): <p> noItems </p>}
    </>
)
// return(
//     <div className="item-two">
//         {items.map((item)=>(
//             <div className="test" key={item.id}>{item.title}</div>
//         ))}
//     </div>
// )
}