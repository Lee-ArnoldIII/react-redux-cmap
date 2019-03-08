import RosterTableRestroomRequest from './RosterTableRestroomRequest'
import RosterTableQuestion from './RosterTableQuestion'

import React, { Component } from 'react'

export default class RosterTableRow extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  componentDidUpdate (prevProps) {
    console.log('componentdidUpdate')
    console.log('prevProps', prevProps)
  }

  render () {
    console.log('get render', this.props)
    const { data, index, name,
      requestRR, handleNoRequest,
      handleYesRequest, restroom
    } = this.props
    return (
      <React.Fragment>
        {data.question.hasQuestion
          ? <RosterTableQuestion
            text={data.question.text}
            index={index}
            name={name}
            hasQuestion={data.question.hasQuestion} /> : <td />}
        {restroom ? <RosterTableRestroomRequest
          requestRR={requestRR}
          handleNoRequest={handleNoRequest}
          handleYesRequest={handleYesRequest}
        /> : null}
      </React.Fragment>
    )
  }
}
