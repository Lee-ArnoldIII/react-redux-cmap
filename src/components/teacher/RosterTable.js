import React, { Component } from 'react'
import { connect } from 'react-redux'
import RosterTableRow from './RosterTableRow'
import RosterTableHeader from './RosterTableHeader'

class RosterTable extends Component {
  render () {
    return (
      <div className='column is-half'>
        <table className='table is-hoverable is-striped is-bordered'>
          <RosterTableHeader />
          <tbody>
            {this.props.student.map((data, index) => {
              return (
                  <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{data.name}</td>
                  <RosterTableRow
                    name={data.name}
                    index={index}
                    data={data}
                    studentRequestRR={data.restroom.teacherAnswered} /> </tr> : null)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, index) => ({
  student: state.student
})

export default connect(mapStateToProps)(RosterTable)
