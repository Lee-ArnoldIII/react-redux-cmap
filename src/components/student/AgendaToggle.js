import React, { Component } from 'react'

class AgendaToggle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isToggleOn: true,
      textDecoration: 'none'
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  // This needs to be worked so that when user toggles, it puts a line-through stytle add to the text in the agenda line.
  // or this could update state locally and remove the item alltogether.

  handleToggle () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      textDecoration: 'line-through'

    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.isToggleOn ? 'Incomplete' : 'Done'}
        </button>
      </div>
    )
  }
}

export default AgendaToggle
