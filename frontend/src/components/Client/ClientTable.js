import React from 'react'
import { Table } from 'react-bootstrap'
import { MdPalette, MdCreate, MdDelete} from 'react-icons/md'

const ClientTable = ({
  clients,
  colorPickerOpen,
  handleOpenColorPicker,
  handleCloseColorPicker,
  currentPage,
  history,
  client_id,
  color,
  handleDeleteClient
}) => (
  <Table bordered>
    <thead>
      <tr>
        <th className='icon'></th>
        <th>Client</th>
        <th>Project</th>
        <th>Department</th>
        <th>Estimate</th>
        <th>Budget</th>
        <th>Start Date</th>
        <th>History</th>
      </tr>
    </thead>
    <tbody>
      {clients.map((client) => (
        <tr key={client.id} style={{ backgroundColor: client_id === client.id ? color : client.attributes.color, height: '10%' }}>
          <td className='icon'>
            <MdPalette onClick={() => handleOpenColorPicker(client.id, client.attributes.color)} />
            <MdCreate onClick={() => history.push(`/client/${client.id}/edit`)}/>
            <MdDelete onClick={() => handleDeleteClient(client.id)}/>
          </td>
          <td>{client.attributes.name}</td>
          <td>{client.attributes.project}</td>
          <td>{client.attributes.department}</td>
          <td>{client.attributes.estimate}</td>
          <td>{client.attributes.budget}</td>
          <td>{client.attributes.start_date}</td>
          <td className='history-column'>
            <span onClick={() => history.push(`/history/${client.id}`)}>
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
