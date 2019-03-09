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
        <div className='sections $section-padding-medium'>
          <div className='column is-half'>
            <h2>Today's Agenda: </h2> <br />
            <StudentAgenda />
            <br />
          </div>
          <div className='column is-half'>
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

export default StudentDashboard
