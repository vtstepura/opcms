import React from 'react'

const ClientInformation = ({ client }) => {
  return (
    <div style={{ width: '60%', justifyContent: 'space-between', display: 'flex', height: 70, alignItems: 'center' }}>
      <span style={{ fontWeight: 'bold', fontSize: 18}}>Client:<span style={{ fontWeight: 'normal'}}> {client.name}</span></span>
      <span style={{ fontWeight: 'bold', fontSize: 18}}>Project:<span style={{ fontWeight: 'normal'}}> {client.project}</span></span>
      <span style={{ fontWeight: 'bold', fontSize: 18}}>Department:<span style={{ fontWeight: 'normal'}}> {client.department}</span></span>
    </div>
  )
}


export default ClientInformation
