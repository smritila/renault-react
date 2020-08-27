import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import SideDrawer from './SideDrawer/SideDrawer';

function navbar() {
    return(
    <header>
        <div className="renault_nav">
            <Logo />
            
            <nav className="menu_desktop">
                <NavigationItems />
            </nav>
            <a href="" className="nav_toggle" data-toggle="offcanvas">
                <span></span>
            </a>
        </div>
        { SideDrawer }
    </header>
    );
}

export default navbar;