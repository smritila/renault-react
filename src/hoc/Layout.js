import React, { Fragment } from 'react';

import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
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
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;