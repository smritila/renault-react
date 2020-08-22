import React, { Fragment } from 'react';
import ListItem from '../../UI/ListItem';

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
            title: 'Test drive'
        },
        {
            id: 5,
            title: 'Subscription'
        },
        {
            id: 6,
            title: 'Pre-owned'
        }
    ];

    const carModelMenuItems = carModels.map(model => {
        return <ListItem key={ model.id} title={ model.title } />;
    });

    const featureMenuItems = features.map(feature => {
        return <ListItem key={ feature.id} title={ feature.title } />;
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