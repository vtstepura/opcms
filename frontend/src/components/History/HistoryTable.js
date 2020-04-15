import React from 'react'
import { Table } from 'react-bootstrap'

const HistoryTable = ({ history }) => (
  <Table style={{display: 'table' }} bordered>
    <thead>
      <tr>
        <th>Date</th>
        <th>Manager</th>
        <th style={{ width: '50%'}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {history.map((history) => (
        <tr style={{display: 'table-row' }} key={history.id}>
          <td>{history.attributes.date}</td>
          <td>{history.attributes.maneger}</td>
          <td style={{ display: 'block', width: 700, maxWidth: '100%' }} className='action'>
            <span>
              {history.attributes.action}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default HistoryTable
