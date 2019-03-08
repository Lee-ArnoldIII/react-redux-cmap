import React, { Component } from 'react'
import RosterTable from './RosterTable'
import AgendaForm from './AgendaForm'

class TeacherDashboard extends Component {
  render () {
    return (
      <div className='columns' id='teacher'>
        <RosterTable />
        <AgendaForm />
      </div>
    )
  }
}

export default TeacherDashboard
