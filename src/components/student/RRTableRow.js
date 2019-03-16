import React, { Component } from 'react'

export default class RRTableRow extends Component {
  componentDidUpdate (prevProps) {
    console.log('prevProps', prevProps)
  }
  render () {
    const { name, index, status, requested } = this.props
    return (
      <React.Fragment>
        {requested ? <tr key={index}>
          <td>{name}</td>
          <td>{status}</td>
        </tr> : null}

      </React.Fragment>
    )
  }
}
