
export default function Item() {
    const item = {
        title : 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        category: "men's clothing",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 3.9,
        count: 120,
        id:1
    }
    // they should have title, 
    // category, 
    // price, 
    // image, 
    // rating, 
    // count of rating,
    // and maybe id but not shown

    return(
        <div id="item" className="p-2 bg-slate-200 border-2 border-gray-500 m-2 max-w-48">
            <p className="font-bold text-xl">{item.title}</p>
            <p className="text-gray-500 text-base">{item.category}</p>
            <p className="font-medium text-lg">${item.price}</p>
            <p><span>rating ({item.rating}/5) - {item.count}</span></p>
            <img src={item.image} alt="item" />
        </div>
    )
}
