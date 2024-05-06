import React from 'react'
import portfolio from './assets/img/portfolio.png'

export const Header = () => {
  return (
    <>
        <div className="header">
            <ul className="lista">
                <li className="hdr"><a href="#">About</a></li>
                <li className="hdr"><a href="#">Projects</a></li>
            <div className="img"><a href="#"><img src={portfolio} alt="logo"/></a></div>
                <li className="hdr"><a href="#">Skills</a></li>
                <li className="hdr"><a href="#">Contact</a></li>
            </ul>
        </div>
    </>
  )
}
