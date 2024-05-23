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
           {cart.map((i) => (
           <div key={i.product_name}>
            {i.product_name} - x{i.quantity} - total: ${(i.quantity * i.product_price)}
            </div>))} 
            </section>
        )
    }
}

