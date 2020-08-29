import React, { Fragment } from 'react';
import ListItem from '../../UI/ListItem';
import { NavLink } from 'react-router-dom';

function navigationItems() {
    const carModels = [
        {
            id: 1,
            title: 'Captur'
        },
        {
            id: 2,
            title: 'Koleos'
        },
        {
            id: 3,
            title: 'Megane R.S'
        }
    ];

    const features = [
        {
            id: 4,
            title: 'About',
            to: '/about'
        },
        {
            id: 5,
            title: 'Legal Info',
            to: '/legal'
        },
        {
            id: 6,
            title: 'Data protection',
            to: '/personal-data-protection'
        }
    ];

    const carModelMenuItems = carModels.map(model => {
        return <ListItem key={ model.id} title={ model.title } />;
    });

    const featureMenuItems = features.map(feature => {
        return <ListItem key={ feature.id} >
            <NavLink to={ feature.to }>
                { feature.title }
            </NavLink>
        </ListItem>;
    });

    return <Fragment>
        <ul>
            { carModelMenuItems }
        </ul>
        <ul>
            { featureMenuItems }
        </ul>
    </Fragment>;

}

export default navigationItems;