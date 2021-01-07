import React, { useEffect, useState } from 'react'
import { Form, Formik, Field as input, useFormik  } from 'formik'
import { Container } from './style'
import * as Yup from "yup";
import api from '../../services/api'
import { useParams } from 'react-router-dom'

export const Application = () => {
  
  const { idParams } = useParams()
 

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    lastName: Yup.string().required('required'),
    password: Yup.string().min(5, 'Too Short!').required('Required'),
    occupation: Yup.string(),
    phone: Yup.string().required('Required')
  });

  // function clear(response) {
  //   setFieldValue('name', response ? response.data.name : '')
  //   setFieldValue('lastName', response ? response.data.lastName : '')
  //   setFieldValue('email', response ? response.data.email : '')
  //   setFieldValue('password', response ? response.data.password : '')
  //   setFieldValue('phone', response ? response.data.phone : '')
  // }

  const formik = useFormik({
    validationSchema: SignupSchema,
    onSubmit: values => {
      onSubmit(values)
    },
  });


  useEffect(() => {

    async function getProduct() {
      const response = await api.get('users/'+idParams)
      formik.setValues(response.data, false)
      console.log(response)
      // clear(response)
    }
    getProduct()
  },[idParams])


  function onSubmit(data) {
    console.log(data)
    const method = idParams ? 'patch' : 'post'
    const url = idParams
     ? `http://localhost:3333/users/${idParams}`
     : `http://localhost:3333/users/`
    api[method](url, data)
    .then((response) => {
      console.log(response)
    })
   
  }


  return(
    <>
     <h1>My Form</h1>
     
         <Container>
         <form onSubmit={formik.handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formik.values?.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && <div id="feedback">{formik.errors.name}</div>}

            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formik.values?.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName && <div id="feedback">{formik.errors.lastName}</div>}

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formik.values?.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && <div id="feedback">{formik.errors.email}</div>}

            <label>Password:</label>
            <input
              type="text"
              name="password"
              value={formik.values?.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && <div id="feedback">{formik.errors.password}</div>}

            <label>Occupation:</label>
            <input
              type="text"
              name="occupation"
              value={formik.values?.occupation}
              onChange={formik.handleChange}
            />
            {formik.errors.occupation && <div id="feedback">{formik.errors.occupation}</div>}

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formik.values?.phone}
              onChange={formik.handleChange}
            />
            {formik.errors.phone && <div id="feedback">{formik.errors.phone}</div>}

            
            <button type="submit">Submit</button>
         </form>
         </Container>


    </>
  );
}