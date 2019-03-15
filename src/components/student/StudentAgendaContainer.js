import React, { Component } from 'react'
import { connect } from 'react-redux'
import AgendaToggle from './AgendaToggle'

class StudentAgenda extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='container is-fluid'>
        <AgendaToggle label={this.props.warmUp}
          title='Warm Up' />
        <AgendaToggle label={this.props.lesson}
          title='Lesson Objective' />
        <AgendaToggle label={this.props.activity}
          title='Activity' />
        <AgendaToggle label={this.props.exit}
          title='Closure' />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  warmUp: state.agenda.warmUp.task,
  lesson: state.agenda.lesson.task,
  activity: state.agenda.activity.task,
  exit: state.agenda.exit.task

})

export default connect(mapStateToProps)(StudentAgenda)
