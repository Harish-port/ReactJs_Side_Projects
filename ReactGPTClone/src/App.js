import React from 'react';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import SideNav from './components/SideNav/SideNav';
import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <div className='chat-section-container'>
        <SideNav />
        <MainSection />
      </div>
    </div>
  )
}

export default App