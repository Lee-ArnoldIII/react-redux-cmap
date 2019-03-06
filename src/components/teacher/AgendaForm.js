import React, { Component } from 'react'
import { connect } from 'react-redux'

class AgendaForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      warmUp: '',
      lesson: '',
      activity: '',
      exit: ''
    }

    this.handleWarmUp = this.handleWarmUp.bind(this)
    this.handleLesson = this.handleLesson.bind(this)
    this.handleActivity = this.handleActivity.bind(this)
    this.handleExit = this.handleExit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleWarmUp (evt) {
    this.setState({
      warmUp: evt.target.value
    })
  }

  handleLesson (evt) {
    this.setState({
      lesson: evt.target.value
    })
  }

  handleActivity (evt) {
    this.setState({
      activity: evt.target.value
    })
  }

  handleExit (evt) {
    this.setState({
      exit: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.addAgenda(this.state.warmUp,
      this.state.lesson,
      this.state.activity,
      this.state.exit
    )
    this.setState({
      warmUp: '',
      lesson: '',
      activity: '',
      exit: ''
    })
  }

  render () {
    return (
      <React.Fragment>
        <form className='column is-half' onSubmit={this.handleSubmit}>
          <div className='box'>
            <h1 className='title has-text-centered'>Agenda Form</h1>

            <div className='field'>
              <label className='label'>Warm Up</label>
              <div className='control'>
                <input className='input' type='text' placeholder='' value={this.state.warmUp} onChange={this.handleWarmUp} />
              </div>
            </div>

            <div className='field'>
              <label className='label'>Lesson/Content</label>
              <div className='control'>
                <input className='input' type='text' placeholder='' value={this.state.lesson} onChange={this.handleLesson} />
              </div>
            </div>

            <label className='label'>Activity</label>
            <div className='control'>
              <textarea className='textarea has-fixed-size' placeholder='' value={this.state.activity} onChange={this.handleActivity} />
            </div>

            <div className='field'>
              <label className='label'>Exit</label>
              <div className='control'>
                <input className='input' type='text' placeholder='' value={this.state.exit} onChange={this.handleExit} />
              </div>
            </div>

            <div className='field is-grouped is-grouped-centered'>
              <p className='control'>
                <a className='button is-primary' onClick={this.handleSubmit}>
                      Submit
                </a>
              </p>
            </div>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAgenda: (warmUpText, lessonText, activityText, exitText) =>
    dispatch({ type: 'ADD_AGENDA', warmUpText, lessonText, activityText, exitText })
})

export default connect(null, mapDispatchToProps)(AgendaForm)
