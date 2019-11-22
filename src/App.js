import React from 'react'
import './App.css'
import NaviBar from './components/NaviBar'
import SideBar from './components/SideBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

import Show from './components/ShowRecipes'

function App () {
  return (
    <div className='App'>
      <Dashboard />
    </div>
  )
}

export default App
