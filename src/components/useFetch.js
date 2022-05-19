import React, { useEffect, useState } from 'react'

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=6f1eabac`

const useFetch = (urlParams) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show: false, msg: ''});
    const [data, setData] = useState(null);
    
    const fetchMovies = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            if (data.Response === 'True') {
                setData(data.Search || data)
                setError({ show: false, msg: '' })
            } else {
                setError({ show: false, msg: '' })
            }
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    }, [urlParams])

    return {isLoading, error, data}
}

export default useFetch