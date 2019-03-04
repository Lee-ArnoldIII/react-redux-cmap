import React from 'react'

const Tab = ({ handleClick, isActive, label }) => {
  return (
    <div>
      <li className={isActive ? `is-active` : ''} onClick={() => handleClick()} >
        <a className=''>
          {label}
        </a>
      </li>
    </div>
  )
}

export default Tab
