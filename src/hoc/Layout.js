import React, { Fragment } from 'react';

import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';

class Layout extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Fragment>
                <Navbar />
                
                <div>Banner</div>
                <main>
                    { this.props.children }
                </main>
                <Footer />
            </Fragment>
        );
        
    }
}

export default Layout;