import RosterTableRestroomRequest from './RosterTableRestroomRequest'
import RosterTableQuestion from './RosterTableQuestion'

import React from 'react'

const RosterTableRow = ({ data, index, name, studentRequestRR }) => {
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

export default RosterTableRow
