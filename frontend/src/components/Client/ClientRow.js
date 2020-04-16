import React from 'react'
import { MdPalette, MdCreate, MdDelete, MdSave, MdCancel } from 'react-icons/md'
import { TwitterPicker } from 'react-color';
import { Form, Button, FormGroup } from 'react-bootstrap'


const ClientRow = ({ client, handleOpenColorPicker, handleDeleteClient, history, client_id, colorPickerOpen, handleSaveColor, clientInputOpen, handleOpenEdit, handleChange, clientForm, handleEdit, handleCancelEdit, departments, handleCloseColorPicker }) => {
  if ( clientInputOpen && client.id === client_id ) {
    return (
      <tr key={client.id} style={{ backgroundColor: client.attributes.color}}>
      <td >
        <div>
          <MdCancel onClick={() => handleCancelEdit()} />
          <MdSave onClick={() => handleEdit() }/>
        </div>
      </td>
        <td style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5 }} onChange={handleChange} type='name' placeholder='Name' onChange={handleChange} name='name' value={clientForm.name}/>
        </td>
        <td  style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5 }} onChange={handleChange} placeholder='Project' name='project' value={clientForm.project}/>
        </td>
        <td  style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5 }} className='input' as="select" onChange={handleChange}  name='department'>
              <option>Department</option>
              {departments.map(d =>
                <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
              )};
            </Form.Control>
        </td>
        <td  style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5}} onChange={handleChange} placeholder='Estimate' name='estimate' value={clientForm.estimate}/>
        </td>
        <td  style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5}} onChange={handleChange} placeholder='Budget' name='budget' value={clientForm.budget}/>
        </td>
        <td  style={{ padding: 0 }}>
          <Form.Control style={{ marginTop: 5, paddingLeft: 20 }} onChange={handleChange} type='date' placeholder='Start Date' name='start_date' value={clientForm.start_date || ''}/>
        </td>
        <td style={{ minWidth: 150 }}>
          <span>
            { client.attributes.last_history ? (
            <span>
              <span className='manager-name'>
                {client.attributes.maneger_name}:&nbsp;
              </span>
                {client.attributes.last_history.action}
              </span>
            ) : ('Nothing yet')}
          </span>
        </td>
      </tr>

    )
  } else {
    return (
      <tr className='main' key={client.id} style={{ backgroundColor: client.attributes.color}}>
        <td className='icon'>
            <div className='icon-items'>
              <MdPalette style={{ width: 20, height: 20 }} onClick={ () => { !colorPickerOpen ? handleOpenColorPicker(client.id, client.attributes.color) : handleCloseColorPicker() } } />
              <MdCreate style={{ width: 20, height: 20 }} onClick={() => handleOpenEdit(client) }/>
              <MdDelete style={{ width: 20, height: 20 }} onClick={() => handleDeleteClient(client.id)}/>
              </div>

              <div
                className='twitter-picker'
                style={{ visibility: colorPickerOpen ?  client_id === client.id ? 'visible' : 'null' : 'hidden' }}>
              <TwitterPicker
                colors={['#CAF7AE', '#FFFFC3', '#E6FFF9', '#ACC7ED', '#F4AD9C', '#DEACC3', '#E5E5E5', '#FFFFFF']}
                onChangeComplete={ (color) => handleSaveColor(color, client.id) }
              />
              </div >
              <div>
            </div>
        </td>
        <td >{client.attributes.name}</td>
        <td>{client.attributes.project}</td>
        <td>{client.attributes.department}</td>
        <td>{client.attributes.estimate}</td>
        <td>{client.attributes.budget}</td>
        <td>{client.attributes.start_date}</td>
        <td style={{ minWidth: 300, textAlign: 'left', cursor: 'pointer' }} onClick={() => history.push(`/history/${client.id}`, client)}>
          <span>
            { client.attributes.last_history ? (
            <span>
              <span className='manager-name'>
                {client.attributes.maneger_name}:&nbsp;
              </span>
                {client.attributes.last_history.action}
              </span>
            ) : ('Nothing yet')}
          </span>
        </td>
      </tr>
    )
  }
}

export default ClientRow
