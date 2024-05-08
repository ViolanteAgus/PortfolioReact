import React, {useState} from 'react'
import portfolio from './assets/img/portfolio.png'

export const Header2 = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div className={`navbar ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
        <div className="nav_logo"><a href="#"><img src={portfolio} alt="logo"/></a></div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <a href="#" className="item">About</a>
            <a href="#" className="item">Projects</a>
            <a href="#" className="item">Skills</a>
            <a href="#" className="item">Contact</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    </>
  )
}
