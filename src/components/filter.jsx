export const Filter = () => {

    const categories = ['men','women','jewelery','electronics','miscellaneous']

  return (
    <div id='filter-list' className="min-h-svh p-2 bg-slate-200 shadow-md shadow-slate-600 m-2  text-lg font-semibold max-w-80 flex flex-col items-center">
        Filter
        <ul className="flex flex-wrap gap-2 mx-auto justify-start">
            {categories.map((category) => (<li key={category} className=""><button className="shadow-md rounded-sm px-3 py-1 bg-slate-300 hover:bg-slate-500 active:bg-slate-600 active:text-slate-200 transition-colors duration-500">{category}</button></li>))}
        </ul>
    </div>
  )
}

