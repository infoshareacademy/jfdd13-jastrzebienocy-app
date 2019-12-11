import React from 'react'
import './App.css'
import NaviBar from './components/NaviBar'
import SideBar from './screens/recipes/SideBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'


function App () {
  return (
    <div className='App'>
      <Dashboard />
    </div>
  )
}

export default App
