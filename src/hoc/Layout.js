import React from 'react';

import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Banner/Banner';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false
        };
    }

    sideDrawerToggledHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    componentDidMount() {
        console.log('[Mounted]', this.props);
    }
    componentDidUpdate(prevProps) {
        console.log('[Updated]', prevProps, this.props);
    }

    render() {
        return (
            <div className="has_section_bg">
                <Navbar drawerToggleClicked={this.sideDrawerToggledHandler} />
                <SideDrawer 
                    closed={this.sideDrawerToggledHandler} 
                    isOpen={this.state.showSideDrawer}
                />
                <Banner 
                    classes={['banner_style_2']} 
                    backgroundImage="test-drive/test_drive_banner.png"
                    bannerText="Test Drive" 
                />
                <main>
                    { this.props.children }
                </main>
                <Footer />
            </div>
        );
    }
}

export default Layout;