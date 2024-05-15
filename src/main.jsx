import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header2 } from './Header2'
import { About } from './About'
import { Projects } from './Projects'
import { Skills } from './Skills'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header2/>
    <About/>
    <Projects/>
    <Skills/>
  </React.StrictMode>,
)
