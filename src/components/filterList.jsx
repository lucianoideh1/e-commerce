export const FilterList = () => {

    const categories = ['men','women','jewelery','electronics','miscellaneous']

  return (
    <div className="p-2 bg-slate-200 border-2 border-gray-500 m-2 max-w-48">
        <h3 className="border-b-2 border-slate-600 text-xl font-bold">filterList</h3>
        <p className="font-bold">all</p>
        { categories ? (categories.map((category) => (<p key={category} className="border-b-2 border-gray-600 mb-2">{category}</p>))) : <p>no filtes applied</p>}
    </div>
  )
}

