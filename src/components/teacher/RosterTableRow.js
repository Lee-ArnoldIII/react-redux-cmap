import RosterTableRestroomRequest from './RosterTableRestroomRequest'
import RosterTableQuestion from './RosterTableQuestion'

import React, { Component } from 'react'

export default class RosterTableRow extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    const { data, index, name,
      studentRequestRR
    } = this.props
    return (
      <React.Fragment>
        {data.question.hasQuestion
          ? <RosterTableQuestion
            text={data.question.text}
            index={index}
            name={name}
            hasQuestion={data.question.hasQuestion} /> : <td />}
        {studentRequestRR ? <RosterTableRestroomRequest
          index={index}
        /> : null}
      </React.Fragment>
    )
  }
}
