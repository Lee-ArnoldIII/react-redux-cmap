import React, { Component } from 'react'
import { connect } from 'react-redux'

class StudentAgenda extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    console.log(this.props.item)
    return (
      <div className='container'>
        <div className='content' id='warmUP'>
        Warm-up: {this.props.warmUp}
        </div>

        <div className='content' id='lesson'>
        Today's lesson: {this.props.lesson}
        </div>

        <div className='content' id='activity'>
        Today's activity: {this.props.activity}
        </div>

        <div className='content' id='exit'>
        Exit: {this.props.exit}
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todoText) => dispatch({ type: 'ADD_TODO', text: todoText }),
  toggleTodo: (idx) => dispatch({ type: 'TOGGLE_TODO', idx: idx })

})

export default connect(mapStateToProps)(StudentAgenda)
