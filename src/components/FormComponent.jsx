import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  
    const [formData, setFormData] = useState({
      type: 'people',
      idNum: 1,
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
      const {name, value} = e.target
      setFormData({
        ...formData,
        [name]:value

        //MODIFIES STATE ELEMENT
      })
    }
    const submitHandler = (e) => {
      e.preventDefault()
      console.log(formData)

      navigate(`/${formData.type}/${formData.idNum}`)
    }

    return(
      <form onSubmit={submitHandler}>    
      <div>
        <label htmlFor="type">Search for:</label>
        <select className="input" name="type" id='type' onChange={changeHandler}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      <div>
        <label htmlFor="idNum">ID:</label>
        <input type="number" name='idNum' id='idNum' value={formData.idNum} onChange={changeHandler}  />
      </div>
      <button type='submit'>Search</button>

      </form>
    )
  
}

export default Form