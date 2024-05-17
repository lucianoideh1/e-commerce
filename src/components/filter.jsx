export const Filter = () => {

    const categories = ['men','women','jewelery','electronics','miscellaneous']

  return (
    <div id='filter-list' className="p-2 bg-slate-200 border-2 border-gray-500 m-2  text-lg font-semibold max-w-80 flex flex-col items-center">
        Filter
        <ul className="flex flex-wrap gap-2 mx-auto justify-center">
            {categories.map((category) => (<li key={category} className=""><button className="px-3 py-1 bg-slate-400 hover:bg-slate-500 active:bg-slate-600 active:text-slate-200 transition-colors duration-500">{category}</button></li>))}
        </ul>
    </div>
  )
}

