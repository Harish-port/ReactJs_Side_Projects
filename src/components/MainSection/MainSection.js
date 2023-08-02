import React, { useState } from 'react';
import './MainSection.scss';
import Button from '../Button/index';
import CodeIcon from '../../assets/Images/generativeCode.svg';
import UnitTestIcon from '../../assets/Images/generativeUnit.svg';
import CodeReviewIcon from '../../assets/Images/codeReview.svg';
import BugsIcon from '../../assets/Images/bugs.svg';
import TestCaseIcon from '../../assets/Images/testcases.svg';
import submitIcon from '../../assets/Images/submitIcon.svg';
import ToggleSwitchButton from '../Button/ToggleSwitchButton';

function MainSection() {
  return (
    <div className='chat-section'>
      <ToggleSwitchButton />
      <div className='user-options'>
        <div className='section-1'>
          <Button icon={CodeIcon} description="Generate Code" classname="user-option-btn gc" />
          <Button icon={UnitTestIcon} description="Generate Unit Tests" classname="user-option-btn gut" />
          <Button icon={CodeReviewIcon} description="Code Review" classname="user-option-btn" />
        </div>
        <div className='section-2'>
          <Button icon={BugsIcon} description="Find Bugs" classname="user-option-btn" />
          <Button icon={TestCaseIcon} description="Generate Test Cases" classname="user-option-btn gts" />
        </div>
        <div className='bottom-input-field'>
        <div className='input-container'>
          <input className='input-field' id='submit' placeholder='Please enter your message here' />
          <img src={submitIcon} alt="NA"></img>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default MainSection