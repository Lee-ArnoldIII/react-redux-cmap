import React, { Component } from 'react'
import RosterTable from './RosterTable'
import AgendaForm from './AgendaForm'
import { connect } from 'tls';

class TeacherDashboard extends Component {
  render() {
    return (
      <div className='columns'>
        <RosterTable />
        <AgendaForm />
      </div>
    )
  }
}



export default TeacherDashboard