import { useEffect, useState } from 'react'
const useGetData = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

    },[])

    return {data, error, loading}
}

export default useGetData