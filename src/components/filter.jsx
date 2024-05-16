export const Filter = () => {

    const categories = ['men','women','jewelery','electronics','miscellaneous']

  return (
    <div id='filter-list' className="p-2 bg-slate-200 border-2 border-gray-500 m-2  text-lg font-semibold">
        Filter
        <ul className="flex flex-wrap gap-2">
            {categories.map((category) => (<li key={category} className="px-3 py-1 bg-slate-400">{category}</li>))}
        </ul>
    </div>
  )
}

