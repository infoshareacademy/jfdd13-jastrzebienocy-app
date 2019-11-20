import React from 'react';
import './App.css';
import NaviBar from './components/NaviBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'
import AddForm from './components/AddToForm'
import Show from './components/ShowRecipes'

function App() {
  return (
    <div className="App">
      <NaviBar />
      <div>
        <Dashboard />
      </div>
      <div className="FlexBox">
        <SideBar />
        <MainContent/>
      </div>
      <Footer />
    </div>
    
  );
}



export default App;
