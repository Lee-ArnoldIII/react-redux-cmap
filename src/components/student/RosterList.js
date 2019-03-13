import React, { Component } from 'react'
import { connect } from 'react-redux'
import Requests from './Requests'

class RosterList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedStudent: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (evt) {
    console.log(evt.target.value)
    this.setState({ selectedStudent: evt.target.value })
  }

  render () {
    return (
      <div className='select'>
        <select onChange={this.handleChange}>
          {this.props.student.map((data, index) => {
            return (
              <option value={index}>{data.name}</option>
            )
          }) }
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  askQuestion: (requestQuestionText) => dispatch({ type: 'ASK_QUESTION', requestQuestionText }),
  restroomRequest: () => dispatch({ type: 'RR_REQUEST' })
})

const mapStateToProps = (state) => ({
  student: state.teacher.student
})

export default connect(mapStateToProps, mapDispatchToProps)(RosterList)
