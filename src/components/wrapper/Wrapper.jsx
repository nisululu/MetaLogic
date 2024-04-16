import React from 'react'
import './Wrapper.scss'

const Wrapper = ({children}) => { //build a component wrapper for using common width property
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper
