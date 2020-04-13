import React from 'react'
import { Container } from 'react-bootstrap'
import HistoryForm from './HistoryForm'
import HistoryTable from './HistoryTable'
import Paginator from '../Paginator'

const History = ({ history, historyForm, onSetDate, handleChange, onCreateHistory, pagy, currentPage, onChange }) => (
  <div className='client'>
  <Container>
    <div className='history-list'>
      <HistoryForm
        handleChange={handleChange}
        onCreateHistory={onCreateHistory}
        historyForm={historyForm}
      />
      <HistoryTable history={history} />
    </div>
    <Paginator
      currentPage={currentPage}
      totalPages={pagy.pages}
      onChange={onChange}
    />
  </Container>
</div>
)

export default History
