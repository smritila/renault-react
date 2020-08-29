import React from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navigation/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const bannerMapWithRoute = {
    'test-drive': {
        classes: ['banner_style_2'],
        backgroundImage: 'test-drive/test_drive_banner.png',
        bannerText: 'Test Drive'
    },
    'legal': {
        classes: [],
        backgroundImage: 'page_banner/Banner_Legal.jpg',
        bannerText: 'Legal Info'
    },
    'about': {
        classes: [],
        backgroundImage: 'captur/Exterior_banner.png',
        bannerText: 'Captur'
    }
};

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
            pathname: 'test-drive'
        };
    }

    sideDrawerToggledHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    componentDidUpdate(prevProps) {
        console.log('[componentDidUpdate]');
        if(prevProps.location.pathname !== this.props.location.pathname) {
            let pathname = this.props.location.pathname;
            pathname = pathname.replace('/', '');
            this.setState({ pathname: pathname  })
        }
    }

    render() {
        const bannerObject = bannerMapWithRoute[this.state.pathname];

        return (
            <div className="has_section_bg">
                <Navbar drawerToggleClicked={this.sideDrawerToggledHandler} />
                <SideDrawer 
                    closed={this.sideDrawerToggledHandler} 
                    isOpen={this.state.showSideDrawer}
                />
                <Banner { ...bannerObject }></Banner>
                <main>
                    { this.props.children }
                </main>
                <Footer />
            </div>
        );
    }
}

const layoutWithRouter = withRouter(Layout);

export default layoutWithRouter;