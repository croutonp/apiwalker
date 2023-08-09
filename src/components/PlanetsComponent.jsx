import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Err from './Err'

var flag = false;
// const Err = () => {
//     flag = true;
// return(

// <div>
//     <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F11%2Frevenge-of-the-sith-2000.jpg&amp;q=60" alt="obi" id="obi"/>
//     <p>
//         These aren't the droids you're looking for.
//     </p>
// </div>
// )
// }
const Planets = () => {
    const [data, setData] = useState({})
    const {id} = useParams()
 useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(resp => {
        console.log(resp)
        setData(resp.data)
        flag = false;
        console.log(flag)
    })
    .catch(Err)
    flag = true;
    
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
        null


        
        

}

{
        flag ?
        <div>
            <Err></Err>
        </div>:
        null
}


    </div>
  )
}


export default Planets
