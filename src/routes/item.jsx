
export default function Item() {
    const item = {
        name: "name",
        id: 0,
        price: 10,
        category:"misc"
    }

    return(
        <div id="item">
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
        </div>
    )
}
