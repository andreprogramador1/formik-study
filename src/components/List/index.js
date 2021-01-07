import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { useHistory, useParams } from 'react-router-dom'


export const List = () => {

  const [data, setData] = useState([])

  const history = useHistory()

  useEffect(() => {
    getContent()
  }, [])

  async function getContent() {
    const response = await api.get('/users')
    setData(response.data)
  }
  

  function handleFilter(id) {
    setData(data.filter((item) => (item._id !== id)))
  }

  async function handleDelete(id) {
    console.log(id)
    const removedResponse = await api.delete(`/users/${id}`)
    if(removedResponse.status === 200) {
      handleFilter(id)
    }
    
  }

  return(
  <>
    
        <table style={{ width: "100%" }}>
          <tr style={{ textAlign: 'left' }}>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>password</th>
            <th>ocuppation</th>
            <th>phone</th>
          </tr>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.ocuppation}</td>
              <td>{user.phone}</td>
              <td><button onClick={ () => { history.push(`/form/${user._id}`)} }>Edit</button></td>
              <td><button onClick={ () => {handleDelete(user._id)} }>Delete</button></td>
            </tr>
          ))}
          
        </table>
      )
  </>
  );
}