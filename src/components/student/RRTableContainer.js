import React, { Component } from 'react'
import { connect } from 'react-redux'
import RRTableHeader from './RRTableHeader'
import RRTableRow from './RRTableRow'

class RRTable extends Component {
  render () {
    const { name } = this.props
    return (

      <div>
        <table className='table is-striped'>
          <RRTableHeader />
          <tbody>
            {name.map((data, index) => {
              return (
                <RRTableRow index={index}
                  name={data.name}
                  requested={data.restroom.request}
                  status={data.restroom.accepted} />
              )
            })}
          </tbody>
        </table>

      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  name: state.student
})

export default connect(mapStateToProps)(RRTable)
