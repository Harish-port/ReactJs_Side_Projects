import React from 'react';
import Button from '../Button';
import HistoryIcon from '../../assets/Images/history.svg';
import MessageIcon from '../../assets/Images/message.svg';
import PlusIcon from '../../assets/Images/Union.svg';
import './SideNav.scss';

function SideNav() {
  return (
    <div className='side-nav-container'>
      <Button icon={PlusIcon} description="New Chat" classname="new-chat" />
      <div className='history-view'>
       <img src={HistoryIcon} alt='NA'/> 
       <div>History</div>
      </div>
      <div className='history-section-wrapper'>
       <p>Today</p>
       <div className='today-wrapper'>
       <img src={MessageIcon} alt='NA'/> 
       <div className='chat-description'>Generate code for</div><br/>
        </div>
        <div className='today-wrapper'>
       <img src={MessageIcon} alt='NA'/> 
       <div className='chat-description'>Optimize code for</div><br/>
        </div>
        <p>Yesterday</p>
        <div className='today-wrapper'>
       <img src={MessageIcon} alt='NA'/> 
       <div className='chat-description'>Generate Unit tests for</div><br/>
        </div>
        <p>23 July 2023</p>
        <div className='today-wrapper'>
       <img src={MessageIcon} alt='NA'/> 
       <div className='chat-description'>Find bugs in this code</div><br/>
        </div>
        <p>23 July 2023</p>
        <div className='today-wrapper'>
       <img src={MessageIcon} alt='NA'/> 
       <div className='chat-description'>Generate unit test</div><br/>
        </div>
      </div>
    </div>
  )
}

export default SideNav