import React from 'react'

const Requests = () => {
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

export default Requests
