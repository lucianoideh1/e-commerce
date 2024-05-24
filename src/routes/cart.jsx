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
            <section id="cart">

            
            <section id="cart_products" className="mb-8">
                <ul>
           {cart.map((i) => (
           <li key={i.product_name} className="border-2 border-gray-800 m-2 py-2 px-4 rounded-md">
            {i.product_name} - x{i.quantity} - total: ${(i.quantity * i.product_price)}
            </li>))} 
            </ul>
            </section>
            <section id="payout" className="flex flex-col gap-4 font-semibold text-2xl">
                <p className="flex items-center justify-center">total: x</p>
                <button className="bg-slate-900 text-slate-100 py-2 px-4 font-medium text-2xl rounded-lg flex items-center uppercase justify-center hover:bg-slate-700 transition-colors duration-300">payout</button>
            </section>
            </section>
        )
    }
}

