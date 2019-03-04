import React, { Component } from 'react'

class StudentAgenda extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div className='container'>
        <div className='content' id='warmUP'>
        Warm-up:
        </div>

        <div className='content' id='lesson'>
        Today's lesson:
        </div>

        <div className='content' id='activity'>
        Today's activity:
        </div>

        <div className='content' id='exit'>
        Exit:
        </div>
      </div>

    )
  }
}

export default StudentAgenda
