import React from 'react'
import { Container } from 'react-bootstrap'
import Paginator from '../Paginator'
import ClientForm from './ClientForm'
import ClientTable from './ClientTable'
import ColorPicker from './ColorPicker'


const Client = ({
  clients,
  client,
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
  onDeleteClient
 }) => (
  <div className='client'>
    <Container>
      <div className='client-list'>
        <ClientForm
          handleChange={handleChange}
          client={client}
          departments={departments}
          handleCreateClient={handleCreateClient}
        />
        <ColorPicker
          colors={colors}
          handleChangeColor={handleChangeColor}
          handleSaveColor={handleSaveColor}
          colorPickerOpen={colorPickerOpen}
          handleCancel={handleCancel}
          chooseColor={color}
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
        />
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={pagy.pages}
        onChange={onChange}
      />
    </Container>
  </div>
)

export default Client
