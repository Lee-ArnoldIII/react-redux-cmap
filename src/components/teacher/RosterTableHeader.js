import React from 'react'

const RosterTableHeader = () => {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th title='Number'>#</th>
          <th title='Name'>Name</th>
          <th title='Status'>Status</th>
          <th title='Restroom'>Restroom Request</th>
        </tr>
      </thead>
    </React.Fragment>
  )
}

export default RosterTableHeader
