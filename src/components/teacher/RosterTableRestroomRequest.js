import React from 'react'

const RosterTableRestroomRequest = ({ requestRR, handleYesRequest, handleNoRequest }) => {
  return (
    <React.Fragment>
      <td>
        <form className='control'>
          <label className='radio'>
            <input type='radio' name='answer' value={requestRR}
              onChange={handleYesRequest} />
                     &nbsp;&nbsp;Yes
          </label>
          <label className='radio'>
            <input type='radio' name='answer' value={requestRR}
              onChange={handleNoRequest} />
                     &nbsp;&nbsp;No
          </label>
          <a className='button is-small is-rounded'>Submit</a>
        </form>
      </td>
    </React.Fragment>

  )
}

export default RosterTableRestroomRequest
