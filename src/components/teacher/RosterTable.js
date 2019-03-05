import React from 'react'
import RosterTableRow from './RosterTableRow'

const RosterTable = () => {
  return (
    <div className='column is-half'>
      <table className='table is-hoverable is-striped'>
        <thead>
          <tr>
            <th title='Number'>#</th>
            <th title='Name'>Name</th>
            <th title='Status'>Status</th>
            <th title='Restroom'>Restroom Request</th>
          </tr>
        </thead>
        <tbody>
          <RosterTableRow />
        </tbody>
      </table>
    </div>
  )
}

export default RosterTable
