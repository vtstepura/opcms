import React from 'react'
import { Table } from 'react-bootstrap'

const HistoryTable = ({ history }) => (
  <Table bordered>
    <thead>
      <tr>
        <th>Date</th>
        <th>Manager</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {history.map((history) => (
        <tr key={history.id}>
          <td>{history.attributes.date}</td>
          <td>{history.attributes.maneger}</td>
          <td className='action'>{history.attributes.action}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default HistoryTable
