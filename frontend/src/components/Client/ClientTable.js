import React from 'react'
import { Table } from 'react-bootstrap'
import { MdPalette, MdCreate, MdDelete} from 'react-icons/md'
import { TwitterPicker } from 'react-color';
import ClientRow from './ClientRow'
import { Form, Button } from 'react-bootstrap'

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
  handleOpenEdit,
  clientForm,
  handleChange,
  handleEdit,
  handleCancelEdit,
  departments
}) => (
  <Table bordered>
    <thead>
      <tr>
        <th></th>
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
      {clients.map((client, index) => (
        <ClientRow
          client={client}
          handleOpenColorPicker={handleOpenColorPicker}
          handleDeleteClient={handleDeleteClient}
          history={history}
          client_id={client_id}
          colorPickerOpen={colorPickerOpen}
          handleSaveColor={handleSaveColor}
          clientInputOpen={clientInputOpen}
          handleOpenEdit={handleOpenEdit}
          clientForm={clientForm}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleCancelEdit={handleCancelEdit}
          departments={departments}
          key={index}
          handleCloseColorPicker={handleCloseColorPicker}
        />
      ))}
    </tbody>
    </Table>
)

export default ClientTable
