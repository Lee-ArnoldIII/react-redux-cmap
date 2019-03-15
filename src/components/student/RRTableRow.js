import React from 'react'

// Need to fix the index number in table
const RRStatusTableRow = ({ name, index, status }) => {
  return (
    <React.Fragment>
      {status ? <tr>
        <td>{[]}</td>
        <td>{name}</td>
        <td>{status}</td>
      </tr> : null}

    </React.Fragment>
  )
}

export default RRStatusTableRow
