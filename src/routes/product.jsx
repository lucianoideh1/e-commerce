import { useOutletContext } from "react-router-dom"
import { useParams, useLoaderData } from "react-router-dom"
import { useState } from 'react'

export default function Product() {
  const params  = useParams()
  const productId = params.productId
  const product = useLoaderData()
  // console.log(`product id is:${productId}`)
  // console.log(`product is:${product}`)
  const [counter,setCounter] = useState(1)

  const onSubtract = () => {
    setCounter(counter - 1)
  }
    
  const onAddition = () => {
    setCounter(counter + 1)
  }

  const context = useOutletContext()
  const {cart, setCart}  = context
  console.log(context)
  
  const handleAddToCart = (newItem) => {

    setCart((prevItems) => {
      //check if item already exist on array 
      const itemIndex = prevItems.findIndex((item) => item.id === productId);
      if(itemIndex !== -1){
        //if already exist then update quantity
        const updatedItems = [...prevItems]
        updatedItems[itemIndex].quantity += counter
        return updatedItems
      } else {
        //if doesnt exist then just add to arr 
        return [...prevItems, {product_name:newItem.title,product_price:newItem.price,quantity:counter,id:productId}]
      }
    })
    // setCart([...cart,
    //     {product_name:product.title,
    //     product_price:product.price,
    //     quantity:counter}])

  }
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
            <form onSubmit={( e ) => { e.preventDefault()}} className="p-4 flex flex-col gap-4">
            <ul className="flex gap-6 min-w-full p-2">
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
                <li>xl</li>
            </ul>
                <div className="quantity flex  border-2 border-slate-800 text-lg font-semibold">
                    {counter > 1 && <button onClick={onSubtract} className="hover:bg-gray-200 py-2 px-4 flex-grow transition-colors duration-300">-</button>}
                    <span className=" py-2 px-4 flex-grow text-center">{counter}</span>
                    <button onClick={onAddition} className="hover:bg-gray-200 py-2 px-4 flex-grow transition-colors duration-300">+</button>
                    </div>
                <button className="bg-gray-900 text-slate-200 p-2 px-4 min-w-full " onClick={() => handleAddToCart(product)}>Add to card</button>
            </form>
        </div>
    )
}

