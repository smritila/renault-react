import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

function navbar() {
    return <header className="renault_nav">
        <Logo />
        <nav class="menu_desktop">
            <NavigationItems />
        </nav>
    </header>;
}

export default navbar;