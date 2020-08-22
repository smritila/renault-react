import React from 'react';

function logo() {
    return <a href className="logo">
        <img 
            src={process.env.PUBLIC_URL + "/assets/image/logo.png"} 
            alt="Logo" />
    </a>
}

export default logo;