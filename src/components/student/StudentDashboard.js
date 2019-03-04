import React, { Component } from 'react'
import StudentAgenda from './StudentAgenda'

export default class StudentDashboard extends Component {
  render () {
    return (
      <div>
        <div>
          <h2>Today's Agenda: </h2> <br />
          <StudentAgenda />
        </div>

      </div>
    )
  }
}
