import React, { Fragment } from 'react';

import Navbar from '../components/Navigation/Navbar';
import Banner from '../components/Banner/Banner';

class Layout extends React.Component {
    
    render() {
        return (
            <Fragment>
                <Navbar />
                <Banner 
                    classes={['banner_style_2']} 
                    backgroundImage="test-drive/test_drive_banner.png"
                    bannerText="Test Drive" 
                />
                <main>
                    { this.props.children }
                </main>
                <div>Footer</div>
            </Fragment>
        );
    }
}

export default Layout;