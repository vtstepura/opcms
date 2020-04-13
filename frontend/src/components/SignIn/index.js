import React from 'react'
import { Button, Form, FormGroup } from 'react-bootstrap'

const SignIn = ({ onCreateAuth, handleChange, form }) => (
  <div className='auth'>
    <Form className='login-form center-block'>
      <h2 className='text-center'>Welcome</h2>

      <FormGroup>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder='Email' name='email' onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' name='password'  onChange={handleChange} />
      </FormGroup>

      <Button className='btn-lg btn-block' onClick={() => onCreateAuth(form)}>
        Log In
      </Button>
    </Form>
  </div>
)

export default SignIn
