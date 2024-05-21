import { useOutletContext } from "react-router-dom"
import { useParams, useLoaderData } from "react-router-dom"
//loader for product
export const productLoader = async ({params}) => {
    const { productId } = params
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    console.log(res)
    return res.json()
}

export default function Product() {
  const params  = useParams()
  const productId = params.productId
  const product = useLoaderData()
  console.log(`product id is:${productId}`)
     
  const context = useOutletContext()
  console.log(context)
    return(
        <div id="product" className="shadow-md p-2 m-auto grid grid-cols-2 grid-rows-2 gap-4">
            <section className="product-img p-2 row-start-1 row-end-3">    
                        <img src={product.image} alt="state" className='object-cover max-h-96' />
            </section>
            <section className="details p-2">
            <p className="font-medium text-xl text-slate-900">${product.price}</p>
            <p className="text-gray-700 text-lg">{product.category}</p>
            <p className="font-bold text-lg text-slate-900">{product.title}</p>
            
            </section>
            <form action="" className="p-4 flex flex-col gap-4">
            <ul className="flex gap-6 min-w-full p-2">
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
                <li>xl</li>
            </ul>
                <div className="quantity flex justify-around py-2 border-2 border-slate-800 text-lg font-semibold">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    </div>
                <button className="bg-gray-900 text-slate-200 p-2 px-4 min-w-full">Add to card</button>
            </form>
        </div>
    )
}

