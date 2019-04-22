import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return(
        <div className='headerTitle'>
        <h1>Lambda School</h1>
        <h3 className="handle">@LambdaSchool</h3>
        <h3 className="timeStamp">time</h3>
        </div>
    );
}

export default HeaderTitle;