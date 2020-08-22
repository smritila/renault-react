import React from 'react';

import PropTypes from 'prop-types';


function banner(props) {
    let classes = ["banner"];
    if(props.classes.length > 0) {
        classes = classes.concat(props.classes);
    }
    classes = classes.join(' ');

    const styleObj = {
        background: `url(${process.env.PUBLIC_URL}/assets/image/${props.backgroundImage})`
    };

    return <div className={ classes } style={ styleObj }>
        <div className="banner_into">
            <div className="banner_bottom with_button align-items-end">
                <div>
                    <h1>
                        { props.bannerText }
                    </h1>
                </div>
            </div>
        </div>
    </div>
}

banner.propTypes = {
    classes: PropTypes.array,
    bannerText: PropTypes.string
}

export default banner;