import { useOutletContext } from "react-router-dom"

export const Cart = () => {
    const context = useOutletContext()
    const {cart,setCart} = context
    console.log(context)
    console.log(cart)

    if(cart.length === 0){
        return(<h1 className="text-6xl font-bold">Cart is currently empty</h1>)
    }
    else if(cart.length > 0){
        return(
            <section id="cart_products">
                <ul>
           {cart.map((i) => (
           <li key={i.product_name} className="border-2 border-gray-800 m-2 py-2 px-4 rounded-md">
            {i.product_name} - x{i.quantity} - total: ${(i.quantity * i.product_price)}
            </li>))} 
            </ul>
            </section>
        )
    }
}

