import React, { Component } from 'react'
import RosterTable from './RosterTable'
import AgendaForm from './AgendaForm'

export default class TeacherDashboard extends Component {
  render() {
    return (
      <div className='columns'>
        <RosterTable />
        <AgendaForm />
      </div>
    )
  }
}
