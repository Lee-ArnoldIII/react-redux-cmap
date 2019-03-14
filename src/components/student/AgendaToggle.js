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

  handleToggle () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
      textDecoration: 'line-through'

    }))
  }

  render () {
    const { title, label } = this.props
    return (
      <div className='box'>
        <div className='box' style={{ textDecoration: `${this.state.isToggleOn ? 'none' : 'line-through'}` }}>
          {title}: {label}
        </div>

        <button onClick={this.handleToggle}>
          {this.state.isToggleOn ? 'Done' : 'Undo'}
        </button>
      </div>
    )
  }
}

export default AgendaToggle
