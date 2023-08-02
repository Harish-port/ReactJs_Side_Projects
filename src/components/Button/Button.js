import React from 'react';
import './Button.scss';

function Button({ icon,description,classname }) {
    return (
        <div className={`default ${classname}`}>
            <img src={icon} alt="ascender-icon" />
            <div className='description'>{description}</div>
        </div>
    )
}

export default Button;