import React, { Component } from 'react'
import { connect } from 'react-redux'

class RosterTableRestroomRequest extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestRR: ''
    }
    this.handleYesRequest = this.handleYesRequest.bind(this)
    this.handleNoRequest = this.handleNoRequest.bind(this)
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this)
  }

  handleYesRequest (evt) {
    console.log(evt.target.value)
    this.setState({ requestRR: true })
  }

  handleNoRequest (evt) {
    console.log(evt.target.value)
    this.setState({ requestRR: false })
  }

  handleSubmitRequest (evt) {
    console.log('clicked')
    const { index } = this.props
    evt.preventDefault()
    this.props.accepted(this.state.requestRR, index)
    console.log(index)
    console.log(this.state.requestRR)
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
            <a onClick={this.handleSubmitRequest} className='button is-small is-rounded'>Submit</a>
          </form>
        </td>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  accepted: (accepted, indexRR) => dispatch({
    type: 'ACCEPT_RR',
    accepted,
    indexRR
  })
})

export default connect(null, mapDispatchToProps)(RosterTableRestroomRequest)
