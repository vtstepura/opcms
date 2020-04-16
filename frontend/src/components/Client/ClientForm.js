import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ClientForm = ({ handleChange, clientForm, departments, handleCreateClient }) => (
  <Form onSubmit={(e) => handleCreateClient(e, clientForm)}>
    <Form.Group className='client-form'>
      <Form.Control className='input' onChange={handleChange} placeholder="Name" name="name" required autoComplete="off" value={clientForm.name}/>
      <Form.Control className='input' onChange={handleChange} placeholder="Project" name="project" required autoComplete="off" value={clientForm.project} />
      <Form.Control className='input' as="select" onChange={handleChange}  name='department' required value={clientForm.department}>
          <option>Department</option>
          {departments.map(d =>
            <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
          )};
        </Form.Control>
      <Form.Control className='input' type="number" onChange={handleChange} placeholder="Estimate" name="estimate" autoComplete="off" value={clientForm.estimate} />
      <Form.Control className='input' type="number" onChange={handleChange} placeholder="Budget" name="budget" autoComplete="off" value={clientForm.budget} />
      <Form.Control className='input' type='date' onChange={handleChange} placeholder="start_date" name="start_date" autoComplete="off" value={clientForm.start_date || ''} />
      <Button variant="primary" type='submit'>Create</Button>
    </Form.Group>
  </Form>
)

export default ClientForm
