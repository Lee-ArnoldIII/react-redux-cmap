import React, { Component } from 'react'
import { connect } from 'react-redux'
import RosterTableRow from './RosterTableRow'

class RosterTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestRR: ''
    }
    this.handleYesRequest = this.handleYesRequest.bind(this)
    this.handleNoRequest = this.handleNoRequest.bind(this)
  }

  handleYesRequest (evt) {
    console.log(evt.target.value)
    this.setState({
      requestRR: true
    })
  }

  handleNoRequest (evt) {
    console.log(evt.target.value)
    this.setState({
      requestRR: false
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
  }

  render () {
    return (
      <div className='column is-half'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th title='Number'>#</th>
              <th title='Name'>Name</th>
              <th title='Status'>Status</th>
              <th title='Restroom'>Restroom Request</th>
            </tr>
          </thead>
          <tbody>
            {/* <RosterTableRow /> */}
            <tr>
              <th>1</th>
              <td>Johnny Bravo</td>
              <td>Present</td>
              <td>
                <form className='control'>
                  <label className='radio'>
                    <input type='radio' name='answer' value={this.state.requestRR} onChange={this.handleYesRequest} />
              &nbsp;&nbsp;Yes
                  </label>
                  <label className='radio'>
                    <input type='radio' name='answer' value={this.state.requestRR} onChange={this.handleNoRequest} />
              &nbsp;&nbsp;No
                  </label>
                  &nbsp;<a className='button is-small is-rounded'>Submit</a>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, index) => ({
  name: state.student[index].name,
  attendance: state.student[index].attendance,
  question: state.student[index].question
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RosterTable)
