 async function productLoader({params}){
    const { productId } = params
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    console.log(res)
    return res.json()
}

export default productLoader