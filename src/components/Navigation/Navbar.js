import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

function navbar(props) {
    return <header>
        <div className="renault_nav">
            <Logo />
            
            <nav className="menu_desktop">
                <NavigationItems />
            </nav>
            <a 
                href="javascript:void(0);" 
                className="nav_toggle"
                onClick={props.drawerToggleClicked}>
                <span></span>
            </a>
        </div>
    </header>;
}

export default navbar;