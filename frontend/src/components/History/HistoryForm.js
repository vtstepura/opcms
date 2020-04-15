import React from 'react'
import { Form, Button } from 'react-bootstrap'

const HistoryForm = ({ handleChange, onCreateHistory, historyForm, handleCreateHistory}) => (
  <Form>
    <Form.Group className='history-form'>
      <Form.Control className='input' type='date' onChange={handleChange} placeholder="date" name="date" />
      <Form.Control className='action' onChange={handleChange} placeholder='Action' name="action"/>
      <Button style={{ marginLeft: 10 }} variant="primary" onClick={() => handleCreateHistory(historyForm)}>Submit</Button>
    </Form.Group>
  </Form>
)

export default HistoryForm
