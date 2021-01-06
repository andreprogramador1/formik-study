import React, { useState, useEffect } from 'react'
import api from '../../services/api'


export const List = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getContent()
  }, [])

  async function getContent() {
    const response = await api.get('/users')
    setData(response.data)
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
            </tr>
          ))}
          
        </table>
      )
  </>
  );
}