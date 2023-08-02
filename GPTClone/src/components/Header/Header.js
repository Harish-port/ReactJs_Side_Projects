import React from 'react';
import './Header.scss';
import HelpIcon from '../../assets/Images/Question.svg';
import ChatIcon from '../../assets/Images/Chat.svg';
import SettingsIcon from '../../assets/Images/Vector.svg';
import ProfileIcon from '../../assets/Images/Ellipse5.svg';

function Header() {
    return (
        <div className='header-container checking'>
           <p>Digital Ascender</p>
           <div className='icon-section'>
           <img src={HelpIcon} alt="icon"/>
           <img src={ChatIcon} alt="icon"/>
           <img src={SettingsIcon} alt="icon"/>
           <img src={ProfileIcon} alt="icon"/>
           </div>
        </div>
    )
}

export default Header