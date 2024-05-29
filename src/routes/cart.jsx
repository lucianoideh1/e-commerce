import { useOutletContext } from "react-router-dom"

export const Cart = () => {
    console.log('rendered cart ')
    const context = useOutletContext()
    const {cart,setCart} = context
    console.log(context)
    console.log(cart)


    function onPayout(){
        alert('thanks for buying in the shop')
        setCart([])
       }

    if(cart.length === 0){
        return(<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gray-900 text-gray-100 p-2 m-4">Your cart is currently empty</h1>)
    }
    else if(cart.length > 0){
        
       let total = 0

       for(let i = 0; i < cart.length;i++){
        total += Math.trunc(cart[i].quantity * cart[i].product_price)
       }

       
        return(
            <section id="cart">
            <section id="cart_products" className="mb-8">
                <ul className="">
           {cart.map((i) => (

           <li key={i.product_name} className="flex border-2 border-gray-800 m-2 py-2 px-4 rounded-md">
          <span className="mr-auto">{i.product_name}</span>  x{i.quantity} - total: ${(i.quantity * i.product_price)}
            </li>
        ))} 
            </ul>
            </section>
            <section id="payout" className="p-4 flex flex-col gap-4 font-semibold text-2xl">
                <p className="flex items-center justify-center">total: ${total}</p>
                <button onClick={onPayout} 
                className="bg-slate-900 text-slate-100 py-2 px-4 font-medium text-2xl rounded-lg flex items-center uppercase justify-center hover:bg-slate-700 transition-colors duration-300"
                >payout</button>
            </section>
            </section>
        )
    }
}

