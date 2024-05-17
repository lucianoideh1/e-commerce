import { useEffect } from "react"
export const Card = ({props}) => {

  useEffect(() => {
    function card(){
      console.log('card component mounted')
      console.log({props})
    }
    card()
  },[props])
  return (
    <div className="flex flex-col leading-3">
      <img src={props.image} alt="state" className='object-cover max-h-40' />
      <p className="font-medium text-lg">${props.price}</p>
      <p className="text-gray-700 text-base">{props.category}</p>
      <p className="font-bold text-base">{props.title}</p>
    </div>
  )
}

