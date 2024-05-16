export const Filter = () => {

    const categories = ['men','women','jewelery','electronics','miscellaneous']

  return (
    <div>
        Filter
        <ul>
            {categories.map((category) => (<li key={category}>{category}</li>))}
        </ul>
    </div>
  )
}

