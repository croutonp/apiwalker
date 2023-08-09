import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
 useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
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
            <p>Diameter: {data.diameter}</p>
            <p>Climate: {data.climate}</p>
            <p>Terrain: {data.terrain}</p>
            
            
        </div>:
        <p>Loading...</p>
}
    </div>
  )
}


export default Planets