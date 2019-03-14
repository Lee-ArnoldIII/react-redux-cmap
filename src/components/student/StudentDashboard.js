import React, { Component } from 'react'
import StudentAgenda from './StudentAgenda'
import RRTable from './RRTable'
import Requests from './Requests.js'

class StudentDashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div>

        <div className='columns'>
          <div className='column is-half'>
            <h2>Today's Agenda: </h2>
            <StudentAgenda />
          </div>
          <div className='column is-half'>
            <Requests />
            <RRTable />
          </div>

        </div>
      </div>

    )
  }
}

export default StudentDashboard
