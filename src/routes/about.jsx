import {Link} from 'react-router-dom'
export const About = () => {
    return(
        <section id="about" className="p-4">
            <Link to={'/'}>Go back</Link>
        <article className='mb-12 mt-12'>
        <p className="text-2xl font-semibold bg-gray-900 text-gray-100 p-2">We are</p>    
        <p className='max-w-lg'>A company oriented in technology for e-commerce. Our purpose is to democratize trade to transform millions of lifes from people from all parts of the region.</p>
        </article>
        <article>
         <p className="text-2xl font-semibold bg-gray-900 text-gray-100 p-2">We Do</p>
         <p className='max-w-lg'>Develop techonologic products that allow users to buy, sell, announce, ship, and pay through internet and in a easy way, safe and efficient.</p>  
        </article>
        </section>
    )
}
