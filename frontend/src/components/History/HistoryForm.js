import React from 'react'
import { Form, Button } from 'react-bootstrap'

const HistoryForm = ({ handleChange, onCreateHistory, historyForm, handleCreateHistory}) => (
  <Form onSubmit={(e) => handleCreateHistory(e, historyForm)}>
    <Form.Group className='history-form' >
      <Form.Control className="form-group required" required className='input' type='date' onChange={handleChange} placeholder="date" name="date" value={historyForm.date || ''} />
      <Form.Control required autoComplete="off" className='action' onChange={handleChange} placeholder='Action' name="action" value={historyForm.action} />
      <Button type='submit' style={{ marginLeft: 10 }} variant="primary">Create</Button>
    </Form.Group>
  </Form>
)

export default HistoryForm
