import React from 'react'
import { Form, Formik, Field } from 'formik'
import { Container } from './style'
import * as Yup from "yup";


export const Application = () => {

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    lastName: Yup.string().required('required'),
    password: Yup.number().min(5, 'Too Short!').required('Required'),
    occupation: Yup.string(),
    phone: Yup.number('only number') 
  });

  return(
    <>
     <h1>My Form</h1>
     <Formik
       initialValues={{ name: 'jared', email: 'jared@hotmail.com' }}
       validationSchema={ SignupSchema }
       onSubmit={values => {
        // same shape as initial values
        console.log(values);
 
       }}
       >
         
       {props => (
         <Container>
         <Form>
            <label>Name:</label>
            <Field
              type="text"
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}

            <label>Last Name:</label>
            <Field
              type="text"
              name="lastName"
            />
            {props.errors.lastName && <div id="feedback">{props.errors.lastName}</div>}

            <label>Email:</label>
            <Field
              type="email"
              name="email"
            />
            {props.errors.email && <div id="feedback">{props.errors.email}</div>}

            <label>Password:</label>
            <Field
              type="text"
              name="password"
            />
            {props.errors.password && <div id="feedback">{props.errors.password}</div>}

            <label>Occupation:</label>
            <Field
              type="text"
              name="occupation"
            />
            {props.errors.occupation && <div id="feedback">{props.errors.occupation}</div>}

            <label>Phone:</label>
            <Field
              type="text"
              name="phone"
            />
            {props.errors.phone && <div id="feedback">{props.errors.phone}</div>}

            
            <button type="submit">Submit</button>
         </Form>
         </Container>
       )}
     </Formik>
    </>
  );
}