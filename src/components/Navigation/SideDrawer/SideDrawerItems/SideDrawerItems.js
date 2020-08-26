import React from 'react';

import ListItem from '../../../UI/ListItem';

function sideDrawerItems() {
    const SideDrawerItems = [
        {
            id: 1,
            title: 'Deals & News'
        },
        {
            id: 2,
            title: 'Showroom & Service Centres'
        },
        {
            id: 3,
            title: 'Concept Cars'
        },
        {
            id: 4,
            title: 'Sell Your Car'
        },
       
        {
            id: 5,
            title: 'Insurance'
        },
        {
            id: 6,
            title: 'Ownership'
        },
        {
            id:7,
            title: 'Career'
        },
        {
            id: 8,
            title: 'Blog'
        },

    ];

    const SideDrawerMenuItems = SideDrawerItems.map(item => {
        return <ListItem key={ item.id } classes="nav-item ">
            <a 
                className="nav-link" 
                href="">
                    { item.title }
            </a>
        </ListItem>;
    });

    return <ul className="navbar-nav mr-auto">
        { SideDrawerMenuItems }
    </ul>;
}

export default sideDrawerItems;