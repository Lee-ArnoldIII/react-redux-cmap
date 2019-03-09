import React, { Component } from 'react'
import { connect } from 'react-redux'

class Requests extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestQuestion: '',
      rrRequest: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    console.log(evt.target.value)
    this.setState({ requestQuestion: evt.target.value })
  }

  handleSubmit (e) {
    console.log('Request submitted')
    // const { index } = this.props
    e.preventDefault()
    this.props.askQuestion(this.state.requestQuestion)
  }

  render () {
    return (
      <React.Fragment>
        <form className='column' onSubmit={this.handleSubmit}>
          <div className='box'>
            <h1 className='title has-text-centered'>Assistance/Restroom Request Form</h1>

            <div className='field'>
              <label className='label'>Question</label>
              <div className='control'>
                <input className='input' type='text' placeholder='What is your question?' onChange={this.handleChange} />
                <a className='button is-info' onClick={this.handleSubmit}>
                  Ask Question
                </a>
              </div>
            </div>
            <br />
            <div className='field is-grouped is-grouped-centered'>
              <p className='control'>
                <a className='button is-danger' onClick={this.handleSubmit}>
                  Restroom Break Needed
                </a>

              </p>
            </div>

          </div>
        </form>
      </React.Fragment>

    )
  }
}
// Change code here for const mapStateToProps, connect()(Request), and anything else that is needed to run correctly
const mapDispatchToProps = (dispatch) => ({
  askQuestion: (requestQuestionText) =>
    dispatch({ type: 'ASK_QUESTION', requestQuestionText })
})

export default connect(null, mapDispatchToProps)(Requests)
