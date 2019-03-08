import React from 'react'

const Modal = ({ name, text, close, answeredBtn }) => {
  return (
    <div className='modal is-active' >
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{name}</p>
        </header>
        <section className='modal-card-body'>
          {text}
        </section>
        <footer className='modal-card-foot'>
          <button onClick={answeredBtn} className='button is-success'>Answered</button>
          <button onClick={close} className='button'>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
