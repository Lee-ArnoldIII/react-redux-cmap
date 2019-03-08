import React from 'react'
import { Connect } from 'react-redux'

class Requests extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requestQuestion: '',
      rrRequest: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    console.log('evt.target.value')
    this.setState(evt.target.value)
  }

  handleSubmit (evt) {
    console.log('Request submitted')
    const { index } = this.props
    evt.preventDefault()
    this.props.submit(this.state.requestQuestion, index)
  }

  render () {
    return (
      <div className=''>
        <div className='box'>
          <h1 className='title has-text-centered'>Assistance/Restroom Request Form</h1>

          <div className='field'>
            <label className='label'>Question</label>
            <div className='control'>
              <input className='input' type='text' placeholder='What is your question?' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Requests
