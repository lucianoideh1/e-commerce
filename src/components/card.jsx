
export const Card = ({item}) => {
   

  return (
    <div key={item.id} className="p-2 bg-slate-200 border-2 border-gray-500 m-2 max-w-48">
            <p className="font-bold text-xl">{item.title}</p>
            <p className="text-gray-500 text-base">{item.category}</p>
            <p className="font-medium text-lg">${item.price}</p>
            {/* <p><span>rating ({item.rating}/5) - {item.count}</span></p> */}
            <img src={item.image} alt="item" />
        </div>
  )
}

