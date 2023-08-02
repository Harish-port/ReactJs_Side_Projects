import React from 'react';
import './ToggleSwitchButton.scss'

function ToggleSwitchButton() {
    return (
        <div className="container">
        <div className="switches-container">
          <input type="radio" id="switchMonthly" name="switchPlan" value="Monthly" checked="checked" />
          <input type="radio" id="switchYearly" name="switchPlan" value="Yearly" />
          <label for="switchMonthly" className='code-switch'>Code</label>
          <label for="switchYearly" className='code-switch'>Product</label>
          <div className="switch-wrapper">
            <div className="switch">
              <div className='switch-code'>Code</div>
              <div className='switch-product'>Product</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ToggleSwitchButton