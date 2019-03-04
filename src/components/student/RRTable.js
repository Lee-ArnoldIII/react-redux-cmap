import React, { Component } from 'react'

class RRTable extends Component {
  render () {
    return (
      <div>
        <table className='table is-striped'>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>Erica</td>
              <td>In Restroom</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Sarah</td>
              <td>Waiting</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mark</td>
              <td>Waiting</td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default RRTable
