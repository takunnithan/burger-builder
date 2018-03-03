import React from 'react';

import Logo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = () => (
    <div className={classes.Logo} >
        <img src={Logo} alt='MyBurger' />
    </div>
);

export default logo;