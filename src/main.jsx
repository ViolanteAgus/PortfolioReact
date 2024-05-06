import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Header } from './Header'
import { About } from './About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <About/>
  </React.StrictMode>,
)
