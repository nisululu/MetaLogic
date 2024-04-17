import React, { useEffect, useState } from 'react'
import './Header.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

  const [show, setShow] = useState("show") //for mobile view
  const [lastScrollY, setLastScrollY] = useState(0) //for navbar hide effect
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const exactLocation = location.pathname.split("/")
  const list = [
    "Home",
    "Services",
    "Careers",
    "Blogs",
    "About"
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, location)

  const controlHeader = () => { //function to calc window scroll for nav hide effect
    if (window.scrollY > 300) {
      if (window.scrollY > lastScrollY) {
        setShow("hide")
      } else {
        setShow("show")
      }
      setLastScrollY(window.scrollY)
    } else {
      setShow("show")
    }
  }

  const handleOpen = () => {
    setMobileMenu(true)
  }
  const handleClose = () => {
    setMobileMenu(false)
  }

  const handleNavigate = (item) => { //for navigation purpose
    setMobileMenu(false)
    item == "Home" ? navigate(`/`) : navigate(`/${item}`)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlHeader)
    return () => window.removeEventListener("scroll", controlHeader)
  }, [lastScrollY])

  return (
    <header className={`navbar ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="logo" onClick={()=>handleNavigate("Home")}>
        <img className='logo-img' src="./meta.png" alt="" />
        <span className='logo-text'>MetaLogic</span>
      </div>

      <ul className='menu-items'>
        <div className="close" onClick={handleClose}>
          <svg className='close-btn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="currentColor" d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z" />
          </svg>
        </div>
        {
          list.map((item, index) => {
            return <div key={index} className={`menu-item ${exactLocation[1] == item ? "active" : ""}`} onClick={()=>handleNavigate(`${item}`)}><li>{item}</li></div>
          })
        }

        <div className='mobile-btn'>
          <button>Get in Touch</button>
        </div>
      </ul>

      <div className='btn'>
        <button>Get in Touch</button>
      </div>

      <svg onClick={handleOpen} className='hamburger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>

    </header>
  )
}

export default Header
