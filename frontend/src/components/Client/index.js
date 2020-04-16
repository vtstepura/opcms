import React from 'react'
import { Container } from 'react-bootstrap'
import Paginator from '../Paginator'
import ClientForm from './ClientForm'
import ClientTable from './ClientTable'
import ColorPicker from './ColorPicker'


const Client = ({
  clients,
  clientForm,
  handleChange,
  currentPage,
  pagy,
  onChange,
  handleCreateClient,
  handleDeleteClient,
  departments,
  colors,
  handleOpenColorPicker,
  handleChangeColor,
  colorPickerOpen,
  handleCloseColorPicker,
  color,
  handleSaveColor,
  history,
  handleCancel,
  client_id,
  onDeleteClient,
  renderRow,
  clientInputOpen,
  handleOpenEdit,
  handleEdit,
  handleCancelEdit
 }) => (
  <div className='client'>
      <div className='client-list'>
        <ClientForm
          handleChange={handleChange}
          clientForm={clientForm}
          departments={departments}
          handleCreateClient={handleCreateClient}
        />
        <ClientTable
          clients={clients}
          colorPickerOpen={colorPickerOpen}
          handleOpenColorPicker={handleOpenColorPicker}
          handleCloseColorPicker={handleCloseColorPicker}
          onDeleteClient={onDeleteClient}
          currentPage={currentPage}
          history={history}
          color={color}
          client_id={client_id}
          handleDeleteClient={handleDeleteClient}
          handleSaveColor={handleSaveColor}
          renderRow={renderRow}
          clientInputOpen={clientInputOpen}
          handleOpenEdit={handleOpenEdit}
          handleChange={handleChange}
          clientForm={clientForm}
          handleChange={handleChange}
          handleEdit={handleEdit}
          handleCancelEdit={handleCancelEdit}
          departments={departments}
        />
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={pagy.pages}
        onChange={onChange}
      />
  </div>
)

export default Client
