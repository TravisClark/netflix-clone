import axios from '../axios';
import React, { useEffect, useState } from 'react'

function Row({title, fetchUrl}) {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  return (
    <div>
        <h2>{title}</h2>
        {/* container -> posters */}
    </div>
  )
}

export default Row