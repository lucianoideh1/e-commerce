import { Link } from 'react-router-dom'
import { Card } from './card'
import PropTypes from 'prop-types';

export const ItemCollection = ({ state,loading})  => {
    

    return(
        <section id="item-collection" className=" p-2  shadow-slate-600 m-2  text-lg font-semibold flex flex-col items-center">
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
                    {loading ? null : (
                            state.map((i) => (
                                    <li key={i.title} className="rounded-sm p-2 bg-slate-300 shadow-md shadow-slate-400 max-w-48 max-h-72 overflow-hidden lg:hover:scale-105 hover:cursor-pointer hover:shadow-slate-900 transition-all duration-500"> 
                                <Link to={`/products/${i.id}`}>
                                   <Card props={{image:i.image,price:i.price,category:i.category,title:i.title}}></Card>
                                </Link>
                             </li>))
                    )}
                </ul>
            </section>
    )

}
ItemCollection.propTypes = {
    state: PropTypes.null || PropTypes.object,
    loading: PropTypes.bool
}

