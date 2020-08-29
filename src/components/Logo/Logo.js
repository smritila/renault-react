import React from 'react';
import { NavLink } from 'react-router-dom';

function logo() {
    return <NavLink to="/">
        <img 
            src={process.env.PUBLIC_URL + "/assets/image/logo.png"} 
            alt="Logo" />
    </NavLink>
}

export default logo;