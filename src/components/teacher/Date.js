import React, { Component } from 'react'

export default class Date extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  currentTime () {
    this.setState({
      time: new Date()
    })
  }

  componentDidMount () {
    setInterval(() => this.currentTime(), 1000)
  }

  render () {
    return (
      <div className='section'>
        <h2>{this.state.date.toLocalTimeString()}</h2>
      </div>
    )
  }
}
