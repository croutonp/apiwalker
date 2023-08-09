import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = (props) => {
    const [data, setData] = useState({})
    const {id} = useParams()
    // id comes from Route
 
 useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(resp => {
        console.log(resp)
        setData(resp.data)
    })
    .catch(err => console.log(err))
}, [id])
 
    return (
    <div>
        
        
{
        data ?
        <div>
            <p>Name: {data.name}</p>
            <p>Height: {data.height}</p>
            <p>Gender: {data.gender}</p>
            <p>Birth Year: {data.birth_year}</p>
            
        </div>:
        <p>Loading...</p>
}
    </div>
  )
}

export default People