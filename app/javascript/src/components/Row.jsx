import React, { useState, useEffect } from 'react'
import axios from '../../services/axios'

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]);
     
    return (
        <div> 
            <h2>{title}</h2>
        </div>
    )
} 

export default Row
