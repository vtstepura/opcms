import React from 'react'
import { Table } from 'react-bootstrap'
import { MdPalette, MdCreate, MdDelete} from 'react-icons/md'
import { TwitterPicker } from 'react-color';
import ClientRow from './ClientRow'

const ClientTable = ({
  clients,
  colorPickerOpen,
  handleOpenColorPicker,
  handleCloseColorPicker,
  currentPage,
  history,
  client_id,
  color,
  handleDeleteClient,
  handleSaveColor,
  renderRow,
  clientInputOpen,
  handleOpenEdit
}) => (
  <Table bordered>
    <thead>
      <tr>
        <th style={{ width: 150 }}></th>
        <th>Client</th>
        <th>Project</th>
        <th>Department</th>
        <th>Estimate</th>
        <th>Budget</th>
        <th>Start Date</th>
        <th style={{ width: '40%'}}>History</th>
      </tr>
    </thead>
    <tbody>
      {clients.map((client) => (
        <tr className='main' key={client.id} style={{ backgroundColor: client.attributes.color}}>
          <td className='icon' >
              <div className='icon-items'>
                <MdPalette onClick={() => handleOpenColorPicker(client.id, client.attributes.color)} />
                <MdCreate onClick={() => history.push(`/client/${client.id}/edit`) }/>
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
      ))}
    </tbody>
    </Table>
)

export default ClientTable
