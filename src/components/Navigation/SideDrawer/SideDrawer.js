import React from 'react';
import SideDrawerItems from './SideDrawerItems/SideDrawerItems';

function SideDrawer(){
    return <div className="side_nav">
    	<div className="navbar-collapse offcanvas-collapse">
    		<a href="javascript:;" className="nav_toggle" data-toggle="offcanvas">
	            <span></span>
	        </a>
            { SideDrawerItems }
        </div>
    </div>;
}

export default SideDrawer;