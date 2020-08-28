import React from 'react';
import SideDrawerItems from './SideDrawerItems/SideDrawerItems';

function sideDrawer(props){

    let classes = ['navbar-collapse', 'offcanvas-collapse'];
    if(props.isOpen) {
        classes.push('open');
    }
    classes = classes.join(' ');

    return (
        <div className="side_nav">
            <div className={classes}>
                <a
                    href="javascript:void(0);"
                    className="nav_toggle"
                    onClick={props.closed}>
                    <span></span>
                </a>
                <SideDrawerItems />
            </div>
        </div>
    );
}

export default sideDrawer;