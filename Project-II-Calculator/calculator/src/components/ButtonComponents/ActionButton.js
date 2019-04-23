import React from 'react';
import './Button.css';

const ActionButton = props => {
    return(
        <div className="actionButtons">
            <div className="clear-btn">
                {props.children}
            </div>
        </div>
    );
}

export default ActionButton;