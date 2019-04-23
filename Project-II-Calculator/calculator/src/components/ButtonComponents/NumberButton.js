import React from 'react';
import './Button.css';

const NumButton = props => {
    return(
        <div className="numButton">
            <button className={props.buttonStyle}>{props.text}</button>
        </div>
    );
}

export default NumButton;