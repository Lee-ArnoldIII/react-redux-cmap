import React, { Component } from 'react'
import { connect } from 'react-redux'
import RosterTableRow from './RosterTableRow'


class RosterTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestRR: ''
    }
    this.handleYesRequest = this.handleYesRequest.bind(this)
    this.handleNoRequest = this.handleNoRequest.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleYesRequest (evt) {
    console.log(evt.target.value)
    this.setState({
      requestRR: true
    })
  }

  handleNoRequest (evt) {
    console.log(evt.target.value)
    this.setState({
      requestRR: false
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
  }

  render () {
    return (
      <div className='column is-half'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th title='Number'>#</th>
              <th title='Name'>Name</th>
              <th title='Status'>Status</th>
              <th title='Restroom'>Restroom Request</th>
            </tr>
          </thead>
          <tbody>
            
           {this.props.student.map((data, index) => {
             return (

              data.attendance ? <tr key={index}>
                                  <th>{index + 1}</th>
                                  <td>{data.name}</td>
                                  <RosterTableRow
                                    data={data}
                                    requestRR={this.state.requestRR}
                                    handleNoRequest={this.handleNoRequest}
                                    handleYesRequest={this.handleYesRequest}
                                    restroom={this.props.restroom}/>
                                  </tr> 
                                  : null

                                 
            )
             
             
           })}
           
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, index) => {
  return {
    student: state.student,
    restroom: state.restroom
  }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RosterTable)
