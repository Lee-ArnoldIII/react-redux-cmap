import React, { Component } from 'react'
import RosterTable from './RosterTable'
import AgendaFormContainer from '../../containers/AgendaFormContainer'
import Date from './Date'

class TeacherDashboard extends Component {
  render () {
    return (
      <React.Fragment>
        <Date />
      <div className='columns' id='teacher'>
        
        <RosterTable />
        <AgendaFormContainer />
      </div>
      </React.Fragment>
    )
  }
}

export default TeacherDashboard
