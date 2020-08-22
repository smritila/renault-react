import React, { Fragment } from 'react';

import Navbar from '../components/Navigation/Navbar';

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
                <div>Footer</div>
            </Fragment>
        );
        
    }
}

export default Layout;