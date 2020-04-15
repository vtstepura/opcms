import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ClientForm = ({ handleChange, client, departments, handleCreateClient }) => (
  <Form>
    <Form.Group className='client-form'>
      <Form.Control className='input' onChange={handleChange} placeholder="Name" name="name" />
      <Form.Control className='input' onChange={handleChange} placeholder="Project" name="project"/>
      <Form.Control className='input' as="select" onChange={handleChange}  name='department'>
          <option>Department</option>
          {departments.map(d =>
            <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
          )};
        </Form.Control>
      <Form.Control className='input' type="number" onChange={handleChange} placeholder="Estimate" name="estimate"/>
      <Form.Control className='input' type="number" onChange={handleChange} placeholder="Budget" name="budget" />
      <Form.Control className='input' type='date' onChange={handleChange} placeholder="start_date" name="start_date" />
      <Button variant="primary" onClick={() => handleCreateClient(client)}>Create</Button>
    </Form.Group>
  </Form>
)

export default ClientForm
