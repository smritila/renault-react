// import React, { Fragment } from 'react';
import React from 'react';
import ListItem from '../../UI/ListItem';

function footerItems() {
    const footerItems = [
        {
            id: 1,
            title: 'Legal'
        },
        {
            id: 2,
            title: 'Contact'
        },
        {
            id: 3,
            title: 'Career'
        },

        {
            id: 4,
            title: 'Newsletter'
        },
        {
            id: 5,
            title: 'Showroom & Service'
        },

    ];

    const footerMenuItems = footerItems.map(item => {
        return <ListItem key={ item.id} title={ item.title } />;
    });


    return <ul>
        { footerMenuItems }
    </ul>;
}

export default footerItems;