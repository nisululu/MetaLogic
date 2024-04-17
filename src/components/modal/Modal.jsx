import React, { useState } from 'react'
import './Modal.scss'

const Modal = ({open, setOpen}) => {
    const handleClick = () => {
        setOpen(false)
    }
    return (
        <div className={`modal ${open? "": "close"}`}>
            <svg onClick={handleClick} className='close-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="currentColor" d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
            </svg>
            <p> As all pages were awesome but I thought I would give career page a try to redesign a little bit because this page had little bug in css as I tried to choose option from job opportunities section the navbar shifts. I hope you like it, Thank you!!!</p>
        </div>
    )
}

export default Modal
