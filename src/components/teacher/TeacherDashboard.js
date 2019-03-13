import React, { Component } from 'react'
import RosterTable from './RosterTable'
import AgendaFormContainer from '../../containers/AgendaFormContainer'

class TeacherDashboard extends Component {
  render () {
    return (
      <div className='columns' id='teacher'>
        <RosterTable />
        <AgendaFormContainer />
      </div>
    )
  }
}

export default TeacherDashboard
