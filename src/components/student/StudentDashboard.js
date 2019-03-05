import React, { Component } from 'react'
import StudentAgenda from './StudentAgenda'
import RRTable from './RRTable'
import Requests from './Requests.js'

export default class StudentDashboard extends Component {
  render () {
    return (
      <div>
        <div className='columns'>
          <div className='column'>
            <h2>Today's Agenda: </h2> <br />
            <StudentAgenda />
          </div>
          <div className='column'>
            <Requests />
          </div>
        </div>

        <br />
        <div>
          <RRTable />
        </div>
      </div>
    )
  }
}
