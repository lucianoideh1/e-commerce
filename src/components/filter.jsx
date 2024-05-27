export const Filter = () => {

    const categories = ['all','men','women','jewelery','electronics','miscellaneous']

  return (
    <div id='filter-list' className="hidden  p-2 bg-slate-200 shadow shadow-slate-600 mb-2  text-lg font-semibold  lg:flex flex-col items-center">
        <ul className="flex flex-wrap gap-2 mx-auto justify-start">
            {categories.map((category) => (<li key={category} className=""><button className="text-blue-800 shadow-md rounded-sm px-3 py-1 bg-slate-300 hover:bg-slate-500  hover:text-slate-200 transition-colors duration-500">{category}</button></li>))}
        </ul>
    </div>
  )
}

