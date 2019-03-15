import React, { Component } from 'react'
import { connect } from 'react-redux'

class Requests extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestQuestion: '',
      rrRequest: false,
      student: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRosterList = this.handleRosterList.bind(this)
  }
  handleRosterList (e) {
    this.setState({ student: e.target.value })
    console.log('hgvjgv', this.state.student)
  }
  handleChange (evt) {
    console.log(evt.target.value)
    this.setState({ requestQuestion: evt.target.value })
  }
  handleClick (e) {
    console.log('Student Requested Restroom Break')
    this.props.restroomRequest(this.state.student)
  }

  handleSubmit (e) {
    console.log('Request submitted')
    // const { index } = this.props
    e.preventDefault()
    this.props.askQuestion(this.state.requestQuestion, this.state.student)
    this.setState({ requestQuestion: '' })
    console.log(this.state.requestQuestion)
  }

  render () {
    return (
      <React.Fragment>

        <form className='column' onSubmit={this.handleSubmit}>
          <div className='box'>
            <h1 className='title has-text-centered'>Assistance/Restroom Request Form</h1>
            <div className='select'>
              <select onChange={this.handleRosterList}>
                <option>Please Select Student....</option>
                {this.props.student.map((data, index) => {
                  return (
                    <option value={index}>{data.name}</option>
                  )
                }) }
              </select>
            </div>
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

            <br />
            <br />
            <div className='field is-grouped is-grouped-centered'>
              <p className='control'>
                <a className='button is-danger' onClick={this.handleClick}>
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
  askQuestion: (requestQuestionText, studentIndex) => dispatch({ type: 'ASK_QUESTION', requestQuestionText, studentIndex }),
  restroomRequest: (studentIndex) => dispatch({ type: 'RR_REQUEST', studentIndex })

})

const mapStateToProps = (state) => ({
  student: state.teacher.student
})

export default connect(mapStateToProps, mapDispatchToProps)(Requests)
