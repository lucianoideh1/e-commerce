import { useEffect, useState } from 'react'
const useGetData = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getDataArr(){
            fetch('https://fakestoreapi.com/products')
            .then(response => {
                if(response.status >= 400) {
                    throw new Error('server error')
                }
            })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .then( json => console.log(json))
            .finally(()=> setLoading(false))
        }
        getDataArr()
    },[])

    return {data, error, loading}
}

export default useGetData