import React from 'react'
import { MdPalette, MdCreate, MdDelete} from 'react-icons/md'
import { TwitterPicker } from 'react-color';
import { Form, Button, FormGroup } from 'react-bootstrap'


const ClientRow = ({ client, handleOpenColorPicker, handleDeleteClient, history, client_id, colorPickerOpen, handleSaveColor, clientInputOpen, handleOpenEdit, handleChange }) => {
  if ( clientInputOpen ) {
    return (
      <tr>
      <td className='icon' >
          <div className='icon-items'>
            <MdPalette onClick={() => handleOpenColorPicker(client.id, client.attributes.color)} />
            <MdCreate />
            <MdDelete onClick={() => handleDeleteClient(client.id)}/>
            </div>

            <div
              className='twitter-picker' s
              style={{ visibility: colorPickerOpen ?  client_id === client.id ? 'visible' : 'null' : 'hidden' }}>
            <TwitterPicker
              colors={['#CAF7AE', '#FFFFC3', '#E6FFF9', '#ACC7ED', '#F4AD9C', '#DEACC3', '#E5E5E5', '#FFFFFF']}
              onChangeComplete={ (color) => handleSaveColor(color, client.id) }
            />
            </div >
            <div>
          </div>
      </td>
        <td>
        <Form.Control type='name' placeholder='Name' onChange={handleChange} name='name' value={client.attributes.name}/>
        </td>
        <td>
        <Form.Control type='name' placeholder='Name' name='name' value={client.attributes.project}/>
        </td>
        <td>
        <Form.Control type='name' placeholder='Name' name='name' value={client.attributes.department}/>
        </td>
        <td>
        <Form.Control type='name' placeholder='Name' name='name' value={client.attributes.estimate}/>
        </td>
        <td>
        <Form.Control type='name' placeholder='Name' name='name' value={client.attributes.budget}/>
        </td>
        <td>
        <Form.Control type='name' placeholder='Name' name='name' value={client.attributes.start_date}/>
        </td>
        <td className='history-column'>
          <span onClick={() => history.push(`/history/${client.id}`, client)}>
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
        <td className='icon' >
            <div className='icon-items'>
              <MdPalette onClick={() => handleOpenColorPicker(client.id, client.attributes.color)} />
              <MdCreate onClick={() => handleOpenEdit(client) }/>
              <MdDelete onClick={() => handleDeleteClient(client.id)}/>
              </div>

              <div
                className='twitter-picker' s
                style={{ visibility: colorPickerOpen ?  client_id === client.id ? 'visible' : 'null' : 'hidden' }}>
              <TwitterPicker
                colors={['#CAF7AE', '#FFFFC3', '#E6FFF9', '#ACC7ED', '#F4AD9C', '#DEACC3', '#E5E5E5', '#FFFFFF']}
                onChangeComplete={ (color) => handleSaveColor(color, client.id) }
              />
              </div >
              <div>
            </div>
        </td>
        <td>{client.attributes.name}</td>
        <td>{client.attributes.project}</td>
        <td>{client.attributes.department}</td>
        <td>{client.attributes.estimate}</td>
        <td>{client.attributes.budget}</td>
        <td>{client.attributes.start_date}</td>
        <td className='history-column'>
          <span onClick={() => history.push(`/history/${client.id}`, client)}>
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
