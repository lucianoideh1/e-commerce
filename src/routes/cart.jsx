import { useOutletContext } from "react-router-dom"

export const Cart = () => {
    const context = useOutletContext()
    const {cart,setCart} = context
    console.log(context)
    console.log(cart)
    return(
        <section id="cart">
            cart
            {cart.map(i => <div key={i.product_name}>{i.product_name}</div>)}
        </section>
    )
}

