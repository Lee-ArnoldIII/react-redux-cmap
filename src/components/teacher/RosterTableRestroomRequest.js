import React, { Component } from 'react'
import { connect } from 'react-redux'

class RosterTableRestroomRequest extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestRR: '',
      teacherAnswered: false
    }
    this.handleYesRequest = this.handleYesRequest.bind(this)
    this.handleNoRequest = this.handleNoRequest.bind(this)
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this)
  }

  handleYesRequest (evt) {
    console.log(evt.target.value)
    this.setState({ requestRR: 'Accepted', teacherAnswered: true })
  }

  handleNoRequest (evt) {
    console.log(evt.target.value)
    this.setState({ requestRR: 'Denied', teacherAnswered: false })
  }

  handleSubmitRequest (evt) {
    const { index, teacherAnswered } = this.props
    evt.preventDefault()
    this.props.accepted(this.state.requestRR, index, teacherAnswered)
  }

  render () {
    return (
      <React.Fragment>
        <td>
          <form onSubmit={this.handleSubmitRequest} className='control'>
            <label className='radio'>
              <input type='radio' name='answer' value={this.state.requestRR}
                onChange={this.handleYesRequest} />
                     &nbsp;&nbsp;Yes
            </label>
            <label className='radio'>
              <input type='radio' name='answer' value={this.state.requestRR}
                onChange={this.handleNoRequest} />
                     &nbsp;&nbsp;No&nbsp;
            </label>
            {this.state.requestRR === ''
              ? <a onClick={this.handleSubmitRequest} className='button is-small is-rounded' disabled>Submit</a>
              : <a onClick={this.handleSubmitRequest} className='button is-small is-rounded is-warning'>Submit</a>}

          </form>
        </td>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  accepted: (accepted, indexRR, teacherAnswered) => dispatch({
    type: 'ACCEPT_RR',
    accepted,
    indexRR,
    teacherAnswered
  })
})

export default connect(null, mapDispatchToProps)(RosterTableRestroomRequest)
