import React from 'react'
import { Form, Button, FormGroup } from 'react-bootstrap'

const EditClient = ({ client, clientForm, onUpdateClient, handleChange, handleSetStartDate, departments }) => (
  <div className='auth'>
      <Form className='login-form center-block'>
        <h2 className='text-center'>Edit Client</h2>

        <FormGroup>
          <Form.Label>Client</Form.Label>
          <Form.Control type='name' placeholder='Name' name='name' onChange={handleChange} value={clientForm.name}/>
        </FormGroup>

        <FormGroup>
          <Form.Label>Project</Form.Label>
          <Form.Control type='project' placeholder='Project' name='project'  onChange={handleChange} value={clientForm.project} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Budget</Form.Label>
          <Form.Control placeholder='Budget' name='budget'  onChange={handleChange} value={clientForm.budget} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Department</Form.Label>
          <Form.Control className='input' as="select" onChange={handleChange} value={client.department}  name='department'>
            <option>Department</option>
            {departments.map(d =>
              <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
            )};
          </Form.Control>
        </FormGroup>

        <FormGroup>
          <Form.Label>Estimate</Form.Label>
          <Form.Control placeholder='Estimate' name='estimate' onChange={handleChange} value={clientForm.estimate} />
        </FormGroup>

        <FormGroup>
          <Form.Label>Start Date</Form.Label>
          <Form.Control placeholder='Start Date' name='start_date'  onChange={handleChange} value={clientForm.start_date} />
        </FormGroup>

        <Button className='btn-lg btn-block' onClick={() => onUpdateClient(clientForm)}>
          Edit Client
        </Button>
      </Form>
  </div>
)

export default EditClient
