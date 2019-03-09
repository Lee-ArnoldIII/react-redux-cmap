import React, { Component } from 'react'
import { connect } from 'react-redux'

class StudentAgenda extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    console.log(this.props)
    return (
      <div className='container is-fluid'>
        <div className='box'>
          <div className='box' id='warmUP'>
        W-U: {this.props.warmUp}
            <div className=''>
              <label className='checkbox'>
                <input type='checkbox' /> Done
              </label>
            </div>
          </div>

          <div className='box' id='lesson'>
        Lesson Objective: {this.props.lesson}
          </div>

          <div className='box' id='activity'>
        Activity: {this.props.activity}
          </div>

          <div className='box' id='exit'>
        Closure: {this.props.exit}
          </div>
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
