import React from 'react'

const RosterTableRow = () => {
  return (
    <React.Fragment>
      <tr>
        <th>1</th> 
        <td>Johnny Bravo</td> 
        <td>Present</td> 
        <td>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;Yes
            </label> &nbsp;
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;No
            </label>
          </div>
        </td> 
      </tr>
      <tr>
        <th>1</th> 
        <td>Johnny Bravo</td> 
        <td>Present</td> 
        <td>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;Yes
            </label> &nbsp;
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;No
            </label>
          </div>
        </td> 
      </tr>
      <tr>
        <th>1</th> 
        <td>Johnny Bravo</td> 
        <td>Present</td> 
        <td>
          <div class="control">
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;Yes
            </label> &nbsp;
            <label class="radio">
              <input type="radio" name="answer"/>
              &nbsp;&nbsp;No
            </label>
          </div>
        </td> 
      </tr>
    </React.Fragment>
  )
}

export default RosterTableRow
