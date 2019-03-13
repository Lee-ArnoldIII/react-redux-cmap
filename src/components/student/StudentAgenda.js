import React, { Component } from 'react'
import { connect } from 'react-redux'
import AgendaToggle from './AgendaToggle'

class StudentAgenda extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  //

  render () {
    console.log(this.props)
    return (
      <div className='container is-fluid'>
        <div>
          <AgendaToggle label={this.props.warmUp}
            title='Warm Up' />
        </div>

        <div>
          <AgendaToggle label={this.props.lesson}
            title='Lesson Objective' />
        </div>

        <div>
          <AgendaToggle label={this.props.activity}
            title='Activity' />
        </div>

        <div>
          <AgendaToggle label={this.props.exit}
            title='Closure' />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  warmUp: state.teacher.agenda.warmUp.task,
  lesson: state.teacher.agenda.lesson.task,
  activity: state.teacher.agenda.activity.task,
  exit: state.teacher.agenda.exit.task

})

export default connect(mapStateToProps)(StudentAgenda)
