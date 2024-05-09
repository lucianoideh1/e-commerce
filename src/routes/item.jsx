
export default function Item() {
    const item = {
        name: "name",
        id: 0,
        price: 10,
        category:"misc"
    }

    return(
        <div id="item" className="p-2 bg-slate-200 border-2 border-gray-500 m-2 max-w-48">
            <p className="font-bold text-xl">{item.name}</p>
            <p className="text-gray-500 text-base">{item.category}</p>
            <p className="font-medium text-lg">${item.price}</p>
        </div>
    )
}
