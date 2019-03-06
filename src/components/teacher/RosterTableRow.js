import React from 'react'
import RosterTableRestroomRequest from './RosterTableRestroomRequest'
import RosterTableQuestion from './RosterTableQuestion'

const RosterTableRow = ({ data, index, name, 
                          requestRR, handleNoRequest, 
                          handleYesRequest, restroom
                        }) => {
  return (
    <React.Fragment>
    
      {data.question.hasQuestion ? 
                  <RosterTableQuestion 
                      text={data.question.text}/> : <td></td>}
      {restroom ? <RosterTableRestroomRequest 
                      requestRR={requestRR}
                      handleNoRequest={handleNoRequest}
                      handleYesRequest={handleYesRequest}
                      />: null}
    </React.Fragment>
  )
}

export default RosterTableRow
